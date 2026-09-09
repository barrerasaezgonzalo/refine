
"use client";

import { usePrompt } from "@/app/hooks/usePrompt";

export function Guided() {
  const { questions, answers, handleAnswer } = usePrompt();

  return (
    <section className="mt-8 rounded-2xl border border-white/10 bg-slate-700 p-5 md:p-7">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-white">
          ¿Quieres afinarlo un poco más?
        </h2>

        <p className="mt-2 text-sm text-neutral-400">
          Responde las preguntas que quieras. Puedes dejar cualquiera en blanco.
        </p>
      </div>

      <div className="space-y-6">
        {questions.map((item, index) => (
          <div key={item.id}>
            <label htmlFor={item.id} className="mb-2 block text-sm font-medium">
              {index + 1}. {item.question}
            </label>

            <input
              id={item.id}
              value={answers[item.id] ?? ""}
              onChange={(event) => handleAnswer(item.id, event.target.value)}
              className="h-12 w-full rounded-xl border border-white/15 bg-slate-700 px-4 outline-none focus:border-yellow-600"
            />

            <p className="mt-2 text-xs text-neutral-400">{item.example}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
