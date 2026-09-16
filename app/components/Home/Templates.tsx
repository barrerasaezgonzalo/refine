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
            className="cursor-pointer outline-none items-center gap-2 rounded-lg border border-white/20 bg-slate-800 px-2 py-2 text-xs transition hover:bg-slate-600"
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
