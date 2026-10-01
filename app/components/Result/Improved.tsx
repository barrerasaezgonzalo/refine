"use client";

import { Brain, Check, Clipboard, Terminal } from "lucide-react";
import { useState } from "react";
import { usePrompt } from "@/app/hooks/usePrompt";

export function Improved() {
  const { result,mode } = usePrompt();
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  

  return (
    <div className="flex flex-col gap-2">
      <section className="rounded-sm border border-white/20 bg-slate-800 p-5 shadow-2xl backdrop-blur md:p-6">
        <div className="mb-4 flex items-center justify-between">
          <p className="flex items-center gap-2 text-sm font-medium">
            <Terminal size={22} />
            Prompt Mejorado
          </p>

          <button
            type="button"
            onClick={handleCopy}
            className={`ml-auto pr-2 mr-4 flex cursor-pointer items-center gap-2 text-sm transition text-yellow-600 hover:text-yellow-400 `}
          >
            {copied ? <Check size={17} /> : <Clipboard size={17} />}
            {copied ? "Copiado" : "Copiar"}
          </button>

          <a
            href={`https://chatgpt.com/?q=${encodeURIComponent(result)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="pr-2 flex cursor-pointer items-center gap-2 text-sm transition text-yellow-600 hover:text-yellow-400"
          >
            <Brain size={17} />
            ChatGPT
          </a>
      
        </div>
        <p className={` ${mode==='improve' ? ' min-h-110': ' min-h-60' } w-full resize-none rounded-sm  bg-slate-400/30 border border-white/10 p-4 pb-8 text-sm leading-7 outline-none transition  `}>
          {result}
        </p>
      </section>
    </div>
  );
}
