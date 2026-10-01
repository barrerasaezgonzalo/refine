"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SelectFieldProps } from "@/app/types";

export function SelectField<T extends string>({
  id,
  value,
  options,
  onChange,
}: SelectFieldProps<T>) {
  const [open, setOpen] = useState(false);

  const selectedOption = options.find((option) => option.value === value);

  return (
    <div className="relative">
      <button
        id={id}
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="text-neutral-400 flex h-10 w-full cursor-pointer items-center justify-between rounded-sm border border-white/15 bg-slate-400/30 px-4 text-left outline-none focus:border-yellow-600"
      >
        <span>{selectedOption?.label}</span>
        <ChevronDown
          size={18}
          className={`text-neutral-400 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute z-50 mt-1 w-full overflow-hidden rounded-xl border border-white/15 bg-slate-800 shadow-xl">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
              className="flex w-full cursor-pointer flex-col px-4 py-2 text-left hover:bg-slate-700"
            >
              <span className="text-base">{option.label}</span>

              <span className="text-xs opacity-50">{option.description}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
