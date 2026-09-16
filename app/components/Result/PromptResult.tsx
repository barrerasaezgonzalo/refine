"use client";

import { Bot, RefreshCcw, Terminal } from "lucide-react";
import { Improved } from "./Improved";
import { Guided } from "./Guided";
import { usePrompt } from "@/app/hooks/usePrompt";
import { objectiveOptions, detailOptions } from "@/app/constants";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { PageHeader } from "../UI/PageHeader";

export function PromptResult() {
  const router = useRouter();
  const {
    result,
    objective,
    detail,
    context,
    loadingAction,
    handleGenerate,
    handleReset,
    mode,
    prompt,
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
    <>
      <section>
        <div className="space-y-4">
          <PageHeader
            title="Tu prompt mejorado."
            description={
              mode === "guided"
                ? "Responde algunas preguntas para obtener un prompt más preciso y adaptado a tus necesidades."
                : "Puedes copiarlo, enviarlo a ChatGPT o volver a generarlo manteniendo la misma configuración."
            }
          />

          <section className="rounded-2xl border border-white/10 bg-slate-800 shadow-2xl backdrop-blur p-4">
            <p className="flex items-center gap-2 text-sm font-medium">
              <Terminal size={22} />
              Prompt Original
            </p>

            <p className="border-b border-white/10 pb-4 w-full text-sm leading-7 pt-2 outline-none transition text-neutral-400">
              {prompt.length > 250
                ? `${prompt.slice(0, 250).trimEnd()}...`
                : prompt}
            </p>

            <div className="mt-4 flex items-center gap-2">
              <p className="flex outline-none items-center gap-2 rounded-lg border border-white/20 bg-slate-800 px-2 py-2 text-xs transition">
                {objectiveLabel}
              </p>
              <p className="flex outline-none items-center gap-2 rounded-lg border border-white/20 bg-slate-800 px-2 py-2 text-xs transition">
                {detailLabel}
              </p>
              <p className="flex outline-none items-center gap-2 rounded-lg border border-white/20 bg-slate-800 px-2 py-2 text-xs transition">
                {context ? "Con contexto" : "Sin contexto"}
              </p>
            </div>

            <button
              type="button"
              onClick={handleReset}
              disabled={loadingAction !== null}
              className="mt-4 flex h-10 cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/20 px-5 font-medium transition  hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Bot size={18} />
              Comenzar de nuevo
            </button>
          </section>
        </div>
      </section>

      <div className="flex flex-col gap-2">
        <Improved />
        {!loadingAction && mode === "guided" && <Guided />}

        <div className="mt-6 gap-3 w-full flex justify-end">
          <button
            type="button"
            disabled={loadingAction !== null}
            onClick={() => handleGenerate("ending")}
            className="flex h-10 ml-auto cursor-pointer items-center gap-2 rounded-xl bg-yellow-600 px-5 font-semibold transition hover:brightness-110 disabled:cursor-not-allowed border-yellow-600 disabled:opacity-60"
          >
            <RefreshCcw
              size={18}
              className={` ${loadingAction !== null ? "animate-spin" : ""}`}
            />
            Refinar prompt
          </button>
        </div>
      </div>
    </>
  );
}
