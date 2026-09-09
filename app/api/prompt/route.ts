import { NextResponse } from "next/server";
import { PromptDetail, PromptObjective, PromptRequest } from "../../types";

const objectives: Record<PromptObjective, string> = {
  clear: "Haz el prompt más claro, ordenado y fácil de interpretar. Elimina ambigüedades.",
  precise: "Haz el prompt más preciso. Agrega restricciones y detalles útiles que reduzcan respuestas vagas.",
  professional: "Mejora la estructura y el lenguaje para obtener un resultado más profesional.",
  creative: "Mejora el prompt para favorecer ideas, enfoques y respuestas más creativas.",
};

const details: Record<PromptDetail, string> = {
  short: "El prompt final debe ser breve, directo y contener solo lo necesario.",
  balanced: "El prompt final debe tener suficiente contexto y precisión sin hacerse innecesariamente largo.",
  detailed: "El prompt final puede desarrollar contexto, restricciones, pasos y formato esperado cuando aporten valor.",
};

export async function POST(request: Request) {
  try {
    const body: PromptRequest = await request.json();
    const { prompt, objective, detail, context, guided = false, answers = [] } = body;

    if (!prompt?.trim()) {
      return NextResponse.json(
        { error: "Escribe un prompt para continuar" },
        { status: 400 },
      );
    }

    if (prompt.length > 2000) {
      return NextResponse.json(
        { error: "El prompt no puede superar los 2000 caracteres" },
        { status: 400 },
      );
    }

    if (context && context.length > 1000) {
      return NextResponse.json(
        { error: "El contexto no puede superar los 1000 caracteres" },
        { status: 400 },
      );
    }

    if (!objectives[objective] || !details[detail]) {
      return NextResponse.json(
        { error: "Configuración inválida" },
        { status: 400 },
      );
    }

    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "No se pudo procesar la solicitud" },
        { status: 500 },
      );
    }

    const answeredQuestions = answers
      .filter((item) => item.answer?.trim())
      .map( (item) => `Pregunta: ${item.question}\nRespuesta: ${item.answer.trim()}` )
      .join("\n\n");

    const instructions = `
PROMPT ORIGINAL:
${prompt.trim()}

OBJETIVO:
${objectives[objective]}

NIVEL DE DETALLE:
${details[detail]}

CONTEXTO OPCIONAL:
${context?.trim() || "No proporcionado"}

RESPUESTAS ADICIONALES:
${answeredQuestions || "No proporcionadas"}

MODO GUIADO:
${guided ? "Sí" : "No"}
`;

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json"},
        body: JSON.stringify({
          model: "openai/gpt-oss-20b",
          temperature: 0.4,
          response_format: { type: "json_object" },
          messages: [
            {
              role: "system",
              content: `
Eres un experto en ingeniería de prompts.

Tu trabajo es transformar el prompt del usuario en una versión más clara, útil y efectiva.

Reglas:
- Responde siempre en español.
- Tanto el prompt mejorado como las preguntas y ejemplos deben estar en español.
- Conserva siempre la intención original.
- No cambies el objetivo que quiere conseguir el usuario.
- No agregues requisitos innecesarios.
- Añade contexto, restricciones o formato solo cuando mejoren realmente el resultado.
- No respondas al prompt: debes mejorarlo.
- El resultado debe poder copiarse y utilizarse directamente.
- No menciones que eres una IA.
- Devuelve únicamente JSON válido.

Si MODO GUIADO es "No", responde:

{
  "result": "prompt mejorado"
}

Si MODO GUIADO es "Sí", responde:

{
  "result": "prompt mejorado",
  "questions": [
    {
      "id": "question-1",
      "question": "pregunta breve y concreta",
      "example": "Ej: ejemplo corto de una posible respuesta"
    }
  ]
}

En modo guiado:
- Genera como máximo 3 preguntas.
- Pregunta únicamente cosas que realmente puedan mejorar el prompt.
- No preguntes información que ya aparece en el prompt o contexto.
- Las preguntas deben poder responderse de forma breve.
- Los ejemplos deben orientar sin obligar al usuario a responder de esa manera.
`,
            },
            {
              role: "user",
              content: instructions,
            },
          ],
        }),
      },
    );

    const data = await response.json();
    if (!response.ok) {
      console.error(data);

      return NextResponse.json(
        { error: "No se pudo mejorar el prompt" },
        { status: 500 },
      );
    }

    const content = data.choices?.[0]?.message?.content;
    if (!content) {
      return NextResponse.json(
        { error: "No se pudo generar el resultado" },
        { status: 500 },
      );
    }

    const result = JSON.parse(content);
    if (!result.result) {
      return NextResponse.json(
        { error: "La respuesta generada no es válida" },
        { status: 500 },
      );
    }

    return NextResponse.json({
      result: result.result,
      questions: guided ? (result.questions ?? []) : [],
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Ocurrió un error al mejorar el prompt" },
      { status: 500 },
    );
  }
}
