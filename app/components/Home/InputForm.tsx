"use client";

import { BrushCleaning, Bot, Terminal, Wand2 } from "lucide-react";
import { detailOptions, minInputText, objectiveOptions } from "@/app/constants";
import { usePrompt } from "@/app/hooks/usePrompt";
import { SelectField } from "../UI/SelectField";
import { formatText } from "@/app/utils";

export function InputForm() {
  const {
    prompt,
    setPrompt,
    objective,
    setObjective,
    detail,
    setDetail,
    context,
    setContext,
    loadingAction,
    handleGenerate,
    handleReset,
  } = usePrompt();

  const disabled =
    prompt.trim().length < minInputText || loadingAction !== null;

  return (
    <section className="rounded-2xl border border-white/10 bg-slate-800 p-5 shadow-2xl backdrop-blur md:p-6">
      <div className="mb-4 flex items-center justify-between">
        <p className="flex items-center gap-2 text-sm font-medium">
          <Terminal size={22} />
          Ingresa tu idea.
        </p>

        <button
          type="button"
          onClick={handleReset}
          className="pr-2 flex cursor-pointer items-center gap-2 text-sm transition text-yellow-600 hover:text-yellow-400"
        >
          <BrushCleaning size={17} />
          Limpiar
        </button>
      </div>

      <div className="relative">
        <div
          aria-hidden="true"
          className="min-h-60 w-full rounded-xl border border-transparent p-4 pb-8 bg-slate-800 text-sm leading-7 whitespace-pre-wrap break-words pointer-events-none overflow-hidden"
          dangerouslySetInnerHTML={{ __html: formatText(prompt) }}
        />

        <textarea
          id="prompt"
          minLength={20}
          maxLength={2000}
          value={prompt}
          disabled={loadingAction !== null}
          onChange={(event) => setPrompt(event.target.value)}
          placeholder="Ej: Quiero aprender React y necesito un plan para empezar..."
          className="absolute inset-0 min-h-60 w-full resize-none rounded-xl border border-white/15 bg-transparent p-4 pb-8 text-sm leading-7 text-transparent outline-none transition custom-scroll placeholder:text-neutral-400 focus:border-yellow-600 disabled:opacity-60"
        />

        <span className="absolute bottom-3 right-4 text-xs">
          {prompt.length} / 2000
        </span>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="objective" className="ml-1 text-sm font-medium">
            Objetivo
          </label>

          <SelectField
            id="objective"
            value={objective}
            onChange={setObjective}
            options={objectiveOptions}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="detail" className="ml-1 text-sm font-medium ">
            Nivel de detalle
          </label>

          <SelectField
            id="detail"
            value={detail}
            onChange={setDetail}
            options={detailOptions}
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="context" className="mb-2 block text-sm font-medium ">
          Contexto
          <span className="ml-2 font-normal text-xs">opcional</span>
        </label>

        <div className="relative">
          <textarea
            id="context"
            value={context}
            maxLength={1000}
            disabled={loadingAction !== null}
            onChange={(event) => setContext(event.target.value)}
            placeholder="Ej: Es para una presentación dirigida a clientes..."
            className="min-h-24 w-full resize-none rounded-xl border border-white/15 bg-slate-800 p-4 pb-8 text-sm leading-6  outline-none transition  placeholder:text-neutral-400 focus:border-yellow-600 disabled:opacity-60"
          />

          <span className="absolute bottom-3 right-4 text-xs">
            {context.length} / 1000
          </span>
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <button
          type="button"
          disabled={disabled}
          onClick={() => handleGenerate("improve")}
          className="flex h-10 cursor-pointer items-center justify-center gap-2 rounded-xl bg-yellow-600 px-5 font-semibold transition hover:brightness-110 disabled:cursor-not-allowed border-yellow-600 disabled:opacity-60"
        >
          <Wand2
            size={18}
            className={` ${loadingAction === "improve" ? "animate-spin" : ""}`}
          />
          Mejorar
        </button>

        <button
          type="button"
          disabled={disabled}
          onClick={() => handleGenerate("guided")}
          className="flex h-10 cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/20 px-5 font-medium transition  hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Bot
            size={18}
            className={` ${loadingAction === "guided" ? "animate-spin" : ""}`}
          />
          Refinar prompt
        </button>
      </div>

      <p className="mt-4 text-center text-xs leading-5 opacity-50">
        Refinar puede hacerte hasta 3 preguntas antes de generar el resultado
        final.
      </p>
    </section>
  );
}
