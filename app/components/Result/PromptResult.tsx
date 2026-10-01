"use client";

import { Bot, RefreshCcw, Terminal } from "lucide-react";
import { Improved } from "./Improved";
import { Guided } from "./Guided";
import { usePrompt } from "@/app/hooks/usePrompt";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { PageHeader } from "../UI/PageHeader";

export function PromptResult() {
  const router = useRouter();
  const {
    result,
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


  return (
    <>
      <section className="mr-8">
        <div className="space-y-4">
          <PageHeader
            title="Tu prompt mejorado."
            description={
              mode === "guided"
                ? "Responde algunas preguntas para obtener un prompt más preciso y adaptado a tus necesidades."
                : "Puedes copiarlo, enviarlo a ChatGPT o volver a generarlo manteniendo la misma configuración."
            }
          />

          <section className="rounded-sm border h-65 border-white/20 bg-slate-800 shadow-2xl backdrop-blur p-4">
            <p className="flex items-center gap-2 text-sm font-medium">
              <Terminal size={22} />
              Prompt Original
            </p>

            <p className="w-full text-sm leading-7 pt-2 outline-none transition text-neutral-400">
              {prompt.length > 250
                ? `${prompt.slice(0, 250).trimEnd()}...`
                : prompt}
            </p>

          
          </section>
        </div>
      </section>

      <div className="flex flex-col gap-2">
        <Improved />
        {!loadingAction && mode === "guided" && <Guided />}

        <div className="mt-2 gap-3 w-full flex justify-end items-center">

            <button
              type="button"
              onClick={handleReset}
              disabled={loadingAction !== null}
              className="flex h-10 cursor-pointer items-center justify-center gap-2 rounded-sm border border-white/20 px-5 font-medium transition  hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Bot size={18} />
              Comenzar de nuevo
            </button>


          <button
            type="button"
            disabled={loadingAction !== null}
            onClick={() => handleGenerate("ending")}
            className="flex h-10 cursor-pointer items-center justify-center gap-2 rounded-sm border border-yellow-600 bg-yellow-600 px-5 font-medium transition  hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <RefreshCcw
              size={18}
              className={` ${loadingAction !== null ? "animate-spin" : ""}`}
            />
            Mejorar prompt
          </button>
        </div>
      </div>
    </>
  );
}
