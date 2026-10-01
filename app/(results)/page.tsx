"use client";

import { Hero } from "../components/Home/Hero";
import { Templates } from "../components/Home/Templates";
import { InputForm } from "../components/Home/InputForm";

export default function Home() {
  return (
    <div className="flex gap-8 w-7xl">

      <section className="flex-[32] mr-8">
        <Hero />
        <Templates />
      </section>

      <div className="flex-[68]">
        <InputForm />
      </div>

    </div>
  );
}
