"use client";

import { createContext, ReactNode, useState } from "react";
import { PromptQuestion, PromptContextType, PromptDetail, PromptObjective} from "../types";

export const PromptContext = createContext<PromptContextType | null>(null);

export function PromptProvider({ children }: { children: ReactNode }) {
  const [prompt, setPrompt] = useState("");
  const [objective, setObjective] = useState<PromptObjective>("clear");
  const [detail, setDetail] = useState<PromptDetail>("balanced");
  const [context, setContext] = useState("");
  const [result, setResult] = useState("");
  const [guided, setGuided] = useState(false);
  const [questions, setQuestions] = useState<PromptQuestion[]>([]);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <PromptContext.Provider
      value={{
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
      }}
    >
      {children}
    </PromptContext.Provider>
  );
}
