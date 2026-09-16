import { PromptDetail, PromptObjective, PromptOption } from "./types";

export const templates = [
  {
    id: 1,
    label: "Fórmula Maestra de Prompting",
    template: `Actúa como un [Rol/Profesión] experto en [Tema]. Tu objetivo es [Tarea principal]. Ten en cuenta que la audiencia es [Público objetivo]. Asegúrate de incluir [Detalles clave] y evita por completo [Restricciones o lo que NO quieres]. Entrega el resultado en formato [Tabla / Lista / Párrafos] con un tono [Profesional / Cercano / Creativo].`,
  },
  {
    id: 2,
    label: "Aprender un Nuevo Tema",
    template: `Actúa como un [Profesor / Mentor / Divulgador] experto en [Tema o Campo de estudio]. Tu objetivo es enseñarme desde cero el siguiente concepto: [Escribe aquí el tema específico]. Ten en cuenta que la audiencia soy yo, una persona con un nivel de conocimiento [Principiante / Intermedio] en esta área y que aprende mejor mediante [Ejemplos prácticos / Analogías]. Asegúrate de incluir una explicación simple, los 3 conceptos clave que debo dominar y una analogía cotidiana. Evita por completo usar tecnicismos avanzados sin explicarlos antes. Entrega el resultado en formato de Párrafos cortos y dinámicos utilizando un tono [Cercano / Paciente].`,
  },
  {
    id: 3,
    label: "Generar u Optimizar Código",
    template: `Actúa como un Desarrollador Senior experto en [Lenguaje o Framework, ej: React, Python]. Tu objetivo es [escribir desde cero / optimizar / encontrar un bug en] el siguiente fragmento o lógica: [Describe la lógica o pega tu código aquí]. Ten en cuenta que el entorno de ejecución requiere un código [eficiente / limpio / fácil de mantener]. Asegúrate de incluir el código corregido dentro de bloques de marcado, comentarios breves explicando los cambios clave y una lista de mejoras de rendimiento aplicadas. Evita por completo usar librerías externas innecesarias o cambiar la lógica del negocio original a menos que sea caótica. Entrega el resultado en formato de Código estructurado con explicaciones en un tono [Técnico / Directo].`,
  },
  {
    id: 4,
    label: "Mejorar y Adaptar Textos",
    template: `Actúa como un Editor de Textos y Copywriter experto. Tu objetivo es transformar el texto adjunto para [resumirlo / alargarlo / cambiar su estilo]. El texto original es: "[Pega tu texto aquí]". Ten en cuenta que la audiencia final leerá esto en [un correo / redes sociales / una propuesta formal]. Asegúrate de incluir ganchos iniciales atractivos y mejorar la fluidez de la lectura sin perder el mensaje central. Evita por completo usar frases cliché, lenguaje pasivo o relleno innecesario si se pidió resumir. Entrega el resultado en formato [Texto final / Versión antes y después] utilizando un tono [Profesional / Persuasivo / Cercano].`,
  },
  {
    id: 5,
    label: "Planificador de Proyectos",
    template: `Actúa como un Project Manager certificado experto en metodologías ágiles. Tu objetivo es armar una lista detallada de tareas para ejecutar el siguiente proyecto: [Nombre y descripción del proyecto]. Ten en cuenta que el equipo de trabajo tiene un tiempo límite de [X días/semanas] para la entrega. Asegúrate de incluir hitos principales (milestones), subtareas organizadas cronológicamente y los recursos o herramientas recomendados para cada etapa. Evita por completo dar pasos demasiado vagos o teóricos; requiero acciones concretas de ejecución. Entrega el resultado en formato de [Lista numerada / Tabla de fases] utilizando un tono [Organizado / Directo].`,
  },
  {
    id: 6,
    label: "Lluvia de Ideas y Creatividad",
    template: `Actúa como un Director Creativo experto en metodologías de Ideación y Brainstorming. Tu objetivo es generar [X cantidad, ej: 10] ideas innovadoras y fuera de la caja para: [Tu producto, campaña de marketing, canal de YouTube o problema a resolver]. Ten en cuenta que el mercado objetivo está saturado y buscamos algo que realmente destaque ante [Público objetivo]. Asegúrate de incluir ideas de tres tipos: tradicionales, arriesgadas y locas/disruptivas. Evita por completo dar soluciones genéricas, aburridas o que ya existan de forma masiva en la competencia. Entrega el resultado en formato de Lista con subtítulos breves utilizando un tono [Entusiasta / Creativo / Inspirador].`,
  },
  {
    id: 7,
    label: "Análisis de Datos y Métricas",
    template: `Actúa como un Analista de Datos y Consultor de Negocios experto. Tu objetivo es examinar los siguientes datos o métricas para encontrar patrones y sugerir mejoras: [Pega tus datos, tabla o KPI aquí]. Ten en cuenta que la audiencia que revisará esto es [el equipo técnico / la directiva de la empresa / un cliente]. Asegúrate de incluir los 3 hallazgos (insights) más críticos, las posibles causas de esos números y una recomendación accionable para mejorar los resultados. Evita por completo hacer suposiciones sin sustento matemático o abrumar con tecnicismos estadísticos innecesarios. Entrega el resultado en formato de [Lista de puntos clave / Resumen ejecutivo] utilizando un tono [Analítico / Objetivo].`,
  },
];

export const objectiveOptions: PromptOption<PromptObjective>[] = [
  {
    value: "clear",
    label: "Más claro",
    description: "Elimina ambigüedad y ordena mejor la instrucción.",
  },
  {
    value: "precise",
    label: "Más preciso",
    description:
      "Agrega restricciones y detalles concretos para reducir respuestas vagas.",
  },
  {
    value: "professional",
    label: "Más profesional",
    description:
      "Cambia el tono y estructura para algo más formal o de trabajo.",
  },
  {
    value: "creative",
    label: "Más creativo",
    description: "Abre espacio a ideas, enfoques y resultados menos rígidos.",
  },
];

export const detailOptions: PromptOption<PromptDetail>[] = [
  {
    value: "short",
    label: "Corto",
    description: "directo y compacto.",
  },
  {
    value: "balanced",
    label: "Equilibrado",
    description: "suficientemente específico sin hacerse largo.",
  },
  {
    value: "detailed",
    label: "Detallado",
    description: "incluye más contexto, condiciones, pasos y formato esperado.",
  },
];

export const minInputText = 20;
