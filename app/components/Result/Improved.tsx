
"use client";

import { Check, Clipboard, Terminal } from "lucide-react";
import { useState } from "react";
import { usePrompt } from "@/app/hooks/usePrompt";

export function Improved() {
  const { result } = usePrompt();
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <section className="rounded-2xl border border-white/10 bg-slate-700 p-5 shadow-xl md:p-7">
      <div className="flex items-center justify-between">
        <p className="mb-4 flex items-center gap-2 text-sm font-medium text-neutral-300">
          <Terminal size={22} />
          Prompt mejorado
        </p>

        <button
          type="button"
          onClick={handleCopy}
          className={`mb-4 flex cursor-pointer items-center gap-2 rounded-xl border px-4 py-2 text-sm transition ${
            copied
              ? "border-green-500/30 bg-green-500/10 text-green-400"
              : "border-white/20 bg-white/5 text-neutral-300 hover:bg-white/10"
          }`}
        >
          {copied ? <Check size={17} /> : <Clipboard size={17} />}
          {copied ? "Copiado" : "Copiar"}
        </button>
      </div>

      <textarea
        value={result}
        readOnly
        className="min-h-64 w-full resize-none rounded-xl border border-white/15 bg-slate-700 p-5 text-base leading-7 text-white outline-none"
      />
    </section>
  );
}
