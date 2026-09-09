import { InfoTooltipProps } from "@/app/types";
import { Info } from "lucide-react";

export function InfoTooltip({ children, title }: InfoTooltipProps) {
  return (
    <span className="group relative inline-flex items-center">
      <p>{title}</p>
      <button
        type="button"
        aria-label="Más información"
        className="ml-2 text-neutral-300 transition hover:text-white"
      >
        <Info size={17} />
      </button>
      <span className="pointer-events-none absolute left-1/2 top-full z-20 mt-2 hidden w-72 -translate-x-1/2 rounded-lg border border-white/10  px-3 py-2 text-xs leading-5 text-neutral-300 shadow-xl group-hover:block bg-slate-700">
        {children}
      </span>
    </span>
  );
}
