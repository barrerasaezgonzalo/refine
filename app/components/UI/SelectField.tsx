import { SelectFieldProps } from "@/app/types";
import { ChevronDown } from "lucide-react";

export function SelectField<T extends string>({
  id,
  value,
  options,
  onChange,
}: SelectFieldProps<T>) {
  return (
    <div className="relative">
      <select
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value as T)}
        className="h-12 w-full appearance-none rounded-xl border border-white/15 bg-slate-700 px-4 pr-10 text-neutral-300 outline-none focus:border-yellow-600"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <ChevronDown
        size={18}
        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-neutral-300"
      />
    </div>
  );
}
