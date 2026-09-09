"use client";

import { Hero } from "./components/Home/Hero";
import { Templates } from "./components/Home/Templates";
import { InputForm } from "./components/Home/InputForm";
import { usePrompt } from "./hooks/usePrompt";

export default function HomeHero() {
  const { setPrompt } = usePrompt();

  return (
    <main className="min-h-screen bg-slate-700 px-5 py-8 text-white md:px-10">
      <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl items-center overflow-hidden">
        <div className="relative grid w-full gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <section>
            <Hero />
            <Templates onSelect={setPrompt} />
          </section>
          <InputForm />
        </div>
      </div>
    </main>
  );
}
