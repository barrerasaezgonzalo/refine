import { PageHeaderProps } from "@/app/types";
import { Sparkles } from "lucide-react";

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <>
      <p className="flex items-center gap-2 text-3xl text-yellow-600">
        <Sparkles size={25} />
        <span className="pt-1">Refine AI</span>
      </p>

      <h1 className="text-4xl font-semibold leading-14 md:text-5xl">{title}</h1>

      <p className="text-base leading-7">{description}</p>
    </>
  );
}
