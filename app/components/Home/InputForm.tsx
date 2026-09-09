"use client";

import { BrushCleaning, LoaderCircle, MessageSquareMore, Terminal, Wand2 } from "lucide-react";
import { detailOptions, objectiveOptions } from "@/app/constants";
import { usePrompt } from "@/app/hooks/usePrompt";
import { InfoTooltip } from "../UI/InfoTooltip";
import { SelectField } from "../UI/SelectField";

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
    loading,
    handleImproveNow,
    handleImproveGuided,
    handleReset,
  } = usePrompt();

  return (
    <section className="rounded-2xl border border-white/10 bg-slate-700 p-5 shadow-2xl backdrop-blur md:p-6">
      <div className="mb-4 flex items-center justify-between">
        <p className="flex items-center gap-2 text-sm font-medium text-neutral-300">
          <Terminal size={22} />
          Escribe tu prompt
        </p>

        <button
          type="button"
          onClick={handleReset}
          disabled={loading}
          className="flex cursor-pointer items-center gap-2 text-sm text-neutral-400 transition hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
        >
          <BrushCleaning size={17} />
          Limpiar todo
        </button>
      </div>

      <div className="relative">
        <textarea
          id="prompt"
          maxLength={2000}
          value={prompt}
          disabled={loading}
          onChange={(event) => setPrompt(event.target.value)}
          placeholder="Ej: Quiero aprender React y necesito un plan para empezar..."
          className="min-h-44 w-full resize-none rounded-xl border border-white/15 bg-slate-700 p-4 pb-8 text-base leading-7 text-white outline-none transition placeholder:text-neutral-400 focus:border-yellow-600 disabled:opacity-60"
        />

        <span className="absolute bottom-3 right-4 text-xs text-neutral-400">
          {prompt.length} / 2000
        </span>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div>
          <label
            htmlFor="objective"
            className="mb-2 flex cursor-pointer items-center gap-1 text-sm font-medium text-neutral-300"
          >
            <InfoTooltip title="Objetivo">
              <div className="space-y-2 p-2">
                <p>
                  <strong>Define qué quieres mejorar del prompt:</strong>
                </p>

                {objectiveOptions.map((option) => (
                  <p key={option.value}>
                    <strong>{option.label}</strong> &rArr; {option.description}
                  </p>
                ))}
              </div>
            </InfoTooltip>
          </label>

          <SelectField
            id="objective"
            value={objective}
            onChange={setObjective}
            options={objectiveOptions}
          />
        </div>

        <div>
          <label
            htmlFor="detail"
            className="mb-2 flex cursor-pointer items-center gap-1 text-sm font-medium text-neutral-300"
          >
            <InfoTooltip title="Nivel de detalle">
              <div className="space-y-2 p-2">
                <p>
                  <strong>
                    Define cuánto quieres desarrollar el prompt final:
                  </strong>
                </p>

                {detailOptions.map((option) => (
                  <p key={option.value}>
                    <strong>{option.label}</strong> &rArr; {option.description}
                  </p>
                ))}
              </div>
            </InfoTooltip>
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
        <label
          htmlFor="context"
          className="mb-2 block text-sm font-medium text-neutral-300"
        >
          Contexto
          <span className="ml-2 font-normal text-neutral-400">opcional</span>
        </label>

        <div className="relative">
          <textarea
            id="context"
            value={context}
            maxLength={1000}
            disabled={loading}
            onChange={(event) => setContext(event.target.value)}
            placeholder="Agrega información que pueda ayudar a obtener un mejor resultado..."
            className="min-h-24 w-full resize-none rounded-xl border border-white/15 bg-slate-700 p-4 pb-8 text-sm leading-6 text-white outline-none transition placeholder:text-slate-400 focus:border-yellow-600 disabled:opacity-60"
          />

          <span className="absolute bottom-3 right-4 text-xs text-neutral-400">
            {context.length} / 1000
          </span>
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={handleImproveNow}
          disabled={!prompt.trim() || loading}
          className="flex h-13 cursor-pointer items-center justify-center gap-2 rounded-xl bg-yellow-600 px-5 font-semibold text-neutral-300 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {loading ? (
            <LoaderCircle size={18} className="animate-spin" />
          ) : (
            <Wand2 size={18} />
          )}
          Mejorar ahora
        </button>

        <button
          type="button"
          onClick={handleImproveGuided}
          disabled={!prompt.trim() || loading}
          className="flex h-13 cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 font-medium text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {loading ? (
            <LoaderCircle size={18} className="animate-spin" />
          ) : (
            <MessageSquareMore size={18} />
          )}
          Mejorar con refine
        </button>
      </div>

      <p className="mt-4 text-center text-sm leading-5 text-neutral-400">
        Mejorar con refine puede hacerte hasta 3 preguntas antes de generar el
        resultado final.
      </p>
    </section>
  );
}
