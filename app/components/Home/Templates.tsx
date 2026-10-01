import { templates } from "@/app/constants";
import { usePrompt } from "@/app/hooks/usePrompt";

export function Templates() {
  const { setPrompt } = usePrompt();
  return (
    <div className="mt-6">
      <div className="grid grid-cols-2 gap-3">
        {templates.map((template) => (
          <button
            key={template.id}
            type="button"
            onClick={() => setPrompt(template.template)}
           className=" text-neutral-400 cursor-pointer items-center gap-2 rounded-sm border border-white/20 bg-slate-400/10 px-2 py-2 text-xs transition"
          >
            <span>{template.label}</span>
          </button>
        ))}
      </div>
      <div className="mt-4 text-xs opacity-50">
        Debes cargar una plantilla y reemplazar los campos resaltados con tu
        información.
      </div>
    </div>
  );
}
