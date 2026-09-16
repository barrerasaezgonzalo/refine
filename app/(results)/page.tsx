"use client";

import { Hero } from "../components/Home/Hero";
import { Templates } from "../components/Home/Templates";
import { InputForm } from "../components/Home/InputForm";

export default function Home() {
  return (
    <>
      <section>
        <Hero />
        <Templates />
      </section>
      <InputForm />
    </>
  );
}
