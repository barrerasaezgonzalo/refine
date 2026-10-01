import { PageHeader } from "../UI/PageHeader";

export function Hero() {
  return (
    <div className="space-y-2">
      <PageHeader
        title="Convierte una idea en un mejor prompt."
        description="Escribe lo que necesitas, agrega contexto, elige tu objetivo y nivel de detalle. Mejora tu instrucción al instante o inicia un refinamiento guiado por IA."
      />
    </div>
  );
}
