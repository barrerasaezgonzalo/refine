import { templates } from "@/app/constants";
import { TemplatesProps } from "@/app/types";
import { Code } from "lucide-react";

export function Templates({ onSelect }: TemplatesProps) {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {templates.map((template) => (
        <button
          key={template}
          type="button"
          onClick={() => onSelect(template)}
          className="flex cursor-pointer items-center gap-1 rounded-xl border border-white/20 bg-slate-600 px-2 py-1 text-xs text-neutral-300 transition hover:bg-slate-500"
        >
          <Code size={15} />
          {template}
        </button>
      ))}
    </div>
  );
}
