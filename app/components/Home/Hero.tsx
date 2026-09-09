import { Sparkles } from "lucide-react";

export function Hero() {
  return (
    <>
      <p className="mb-2 flex items-center gap-1 text-ms font-semibold leading-tight tracking-tight text-yellow-600">
        <Sparkles size={17} />
        refine.ai.cl
      </p>
      <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
        Convierte una idea en un mejor prompt.
      </h1>
      <p className="mt-8 max-w-lg text-base leading-7 text-neutral-300 ">
        Escribe lo que necesitas, agrega contexto y elige tu objetivo y nivel de
        detalle. Puedes obtener una mejora inmediata o dejar que la IA te haga
        algunas preguntas antes de crear el resultado.
      </p>
    </>
  );
}
