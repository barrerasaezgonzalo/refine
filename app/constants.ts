import { PromptDetail, PromptObjective, PromptOption } from "./types";

export const templates = [
  "Ayúdame a refactorizar código",
  "Explícame un tema paso a paso",
  "Mejora este texto",
  "Ayúdame a investigar un tema",
  "Dame ideas para un proyecto",
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
