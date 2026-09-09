"use client";

import { useContext } from "react";
import { useRouter } from "next/navigation";
import { PromptContext } from "@/app/providers/PromptProvider";
import { PromptAnswer, PromptApiResponse } from "../types";

export function usePrompt() {
  const context = useContext(PromptContext);
  const router = useRouter();

  if (!context) {
    throw new Error("usePrompt debe usarse dentro de PromptProvider");
  }

  const {
    prompt,
    setPrompt,
    objective,
    setObjective,
    detail,
    setDetail,
    context: promptContext,
    setContext,
    result,
    setResult,
    guided,
    setGuided,
    questions,
    setQuestions,
    answers,
    setAnswers,
    loading,
    setLoading,
    error,
    setError,
  } = context;

  const generatePrompt = async ({
    guidedMode = false,
    includeAnswers = false,
  }: {
    guidedMode?: boolean;
    includeAnswers?: boolean;
  } = {}) => {
    if (!prompt.trim() || loading) return;

    setLoading(true);
    setError("");

    try {
      const promptAnswers: PromptAnswer[] = includeAnswers
        ? questions
            .map((question) => ({
              question: question.question,
              answer: answers[question.id]?.trim() ?? "",
            }))
            .filter((answer) => answer.answer)
        : [];

      const response = await fetch("/api/prompt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: prompt.trim(),
          objective,
          detail,
          context: promptContext.trim(),
          guided: guidedMode,
          answers: promptAnswers,
        }),
      });

      const data: PromptApiResponse & { error?: string } =
        await response.json();

      if (!response.ok) {
        throw new Error(data.error || "No se pudo mejorar el prompt");
      }

      setResult(data.result);
      setQuestions(data.questions ?? []);
      setGuided(guidedMode && Boolean(data.questions?.length));

      return data;
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "No se pudo mejorar el prompt",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleImproveNow = async () => {
    const data = await generatePrompt();

    if (data) {
      setAnswers({});
      router.push("/result");
    }
  };

  const handleImproveGuided = async () => {
    const data = await generatePrompt({
      guidedMode: true,
    });

    if (data) {
      setAnswers({});
      router.push("/result");
    }
  };

  const handleAnswer = (id: string, value: string) => {
    setAnswers((current) => ({
      ...current,
      [id]: value,
    }));
  };

  const handleGenerateWithAnswers = async () => {
    await generatePrompt({
      includeAnswers: true,
    });
  };

  const handleRegenerate = async () => {
    await generatePrompt({
      includeAnswers: Object.values(answers).some((answer) => answer.trim()),
    });
  };

  const handleReset = () => {
    setPrompt("");
    setObjective("clear");
    setDetail("balanced");
    setContext("");
    setResult("");
    setGuided(false);
    setQuestions([]);
    setAnswers({});
    setError("");
    router.push("/");
  };

  return {
    prompt,
    setPrompt,
    objective,
    setObjective,
    detail,
    setDetail,
    context: promptContext,
    setContext,
    result,
    guided,
    questions,
    answers,
    loading,
    error,
    handleImproveNow,
    handleImproveGuided,
    handleAnswer,
    handleGenerateWithAnswers,
    handleRegenerate,
    handleReset,
  };
}
