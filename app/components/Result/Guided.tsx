"use client";
import { usePrompt } from "@/app/hooks/usePrompt";

export function Guided() {
  const { questions, handleAnswer } = usePrompt();

  return (
    <section className="text-neutral-300 ">
      <div className="mt-2 flex flex-col gap-2">
        <div className="flex flex-row gap-2 justify-between">
          <p className="text-sm text-neutral-400">Preguntas opcionales</p>
        </div>
        <div className="space-y-4 mt-2">
          {questions.map((item, index) => (
            <div
              key={item.id}
              className="bg-slate-800 px-4 py-2 rounded-sm border border-white/15"
            >
              <label
                htmlFor={item.id}
                className="mb-1 block text-sm font-medium flex items-center gap-2"
              >
                <span className="text-yellow-600 border border-yellow-600 flex w-fit px-2 py-1 rounded-sm items-center">
                  0{index + 1}
                </span>
                {item.question}
              </label>

              <input
                id={item.id}
                value={item.answer ?? ""}
                onChange={(event) => handleAnswer(item.id, event.target.value)}
                className="h-10 my-2 w-full rounded-sm border border-yellow-600 px-4 outline-none text-xs"
                placeholder={item.example}
              />              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
