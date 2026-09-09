"use client";

import { RefreshCcw, RotateCcw, Sparkles } from "lucide-react";
import { Improved } from "./Improved";
import { Guided } from "./Guided";
import { usePrompt } from "@/app/hooks/usePrompt";
import { objectiveOptions, detailOptions } from "@/app/constants";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function PromptResult() {
  const router = useRouter();
  const {
    result,
    objective,
    detail,
    context,
    guided,
    loading,
    handleGenerateWithAnswers,
    handleRegenerate,
    handleReset,
  } = usePrompt();


  useEffect(() => {
    if (!result) {
      router.replace("/");
    }
  }, [result, router]);

  if (!result) return null;
  
  const objectiveLabel =
    objectiveOptions.find((option) => option.value === objective)?.label ??
    objective;

  const detailLabel =
    detailOptions.find((option) => option.value === detail)?.label ?? detail;

  return (
    <main className="min-h-screen bg-slate-700 px-5 py-10 text-neutral-300 md:px-10">
      <div className="mx-auto w-full max-w-4xl">
        <header className="mb-4 flex flex-col text-center">
          <p className="mx-auto mb-2 flex items-center gap-1 text-sm font-semibold leading-tight tracking-tight text-yellow-600">
            <Sparkles size={17} />
            resultado
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Tu prompt mejorado
          </h1>

          <p className="mt-8 text-base leading-7 text-neutral-300">
            Puedes copiarlo o volver a generarlo manteniendo la misma
            configuración.
          </p>

          <div className="mb-2 mt-4 flex flex-wrap justify-center gap-2">
            <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-neutral-300">
              {objectiveLabel}
            </span>

            <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-neutral-300">
              {detailLabel}
            </span>

            <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-neutral-300">
              {context.trim() ? "Con contexto" : "Sin contexto"}
            </span>
          </div>
        </header>

        <Improved />

        {guided && <Guided />}

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={handleReset}
            disabled={loading}
            className="flex h-13 cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 text-sm font-medium transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <RotateCcw size={17} />
            Crear desde cero
          </button>

          <button
            type="button"
            onClick={guided ? handleGenerateWithAnswers : handleRegenerate}
            disabled={loading}
            className="flex h-13 cursor-pointer items-center justify-center gap-2 rounded-xl bg-yellow-600 px-5 font-semibold text-neutral-300 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <RefreshCcw size={17} className={loading ? "animate-spin" : ""} />

            {loading
              ? "Generando..."
              : guided
                ? "Generar con respuestas"
                : "Regenerar"}
          </button>
        </div>
      </div>
    </main>
  );
}
