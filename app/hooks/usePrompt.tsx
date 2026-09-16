"use client";

import { useContext } from "react";
import { useRouter } from "next/navigation";
import { PromptContext } from "@/app/providers/PromptProvider";
import { GenerateMode, PromptApiResponse } from "../types";
import { minInputText } from "../constants";

export function usePrompt() {
  const promptContext = useContext(PromptContext);
  const router = useRouter();
  if (!promptContext) {
    throw new Error("usePrompt debe usarse dentro de PromptProvider");
  }

  const {
    prompt,
    setPrompt,
    objective,
    setObjective,
    detail,
    setDetail,
    context,
    setContext,
    result,
    setResult,
    questions,
    setQuestions,
    loadingAction,
    setLoadingAction,
    mode,
    setMode,
    error,
    setError,
  } = promptContext;

  const handleGenerate = async (mode: GenerateMode) => {
    if (prompt.trim().length < minInputText || loadingAction || !mode) {
      return;
    }
    setLoadingAction(mode);
    setMode(mode);
    setError("");

    try {
      const response = await fetch("/api/prompt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: prompt.trim(),
          objective,
          detail,
          context: context.trim(),
          mode,
          questions,
        }),
      });
      const data: PromptApiResponse & { error?: string } =
        await response.json();

      if (!response.ok) {
        throw new Error(data.error || "No se pudo mejorar el prompt");
      }

      setResult(data.result);
      setQuestions(mode === "improve" ? [] : data.questions || []);

      router.push("/result");
      return data;
    } catch (err: unknown) {
      setError(
        err instanceof Error ? err.message : "No se pudo mejorar el prompt",
      );
    } finally {
      setLoadingAction(null);
    }
  };

  const handleAnswer = (id: string, answer: string) => {
    setQuestions((current) =>
      current.map((item) => (item.id === id ? { ...item, answer } : item)),
    );
  };

  const handleReset = () => {
    setPrompt("");
    setObjective("clear");
    setDetail("balanced");
    setContext("");
    setResult("");
    setQuestions([]);
    setError("");
    setMode(null);
    router.push("/");
  };

  return {
    prompt,
    setPrompt,
    objective,
    setObjective,
    detail,
    setDetail,
    context,
    setContext,
    result,
    questions,
    error,
    handleGenerate,
    handleAnswer,
    handleReset,
    loadingAction,
    setLoadingAction,
    mode,
  };
}
