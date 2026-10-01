import { PageHeaderProps } from "@/app/types";
import { Sparkles } from "lucide-react";

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <>
      <p className="flex items-center gap-2 text-3xl text-yellow-600">
        <Sparkles size={25} />
        <span className="pt-1">Refine AI</span>
      </p>

     <h1 className="text-3xl font-semibold leading-12 text-slate-100 md:text-4xl">
  {title}
</h1>

<p className="text-sm leading-7 text-slate-300">{description}</p>
    </>
  );
}
