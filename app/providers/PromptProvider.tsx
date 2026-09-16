"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import {
  PromptQuestion,
  PromptDetail,
  PromptObjective,
  GenerateMode,
} from "../types";

export type PromptContextType = {
  prompt: string;
  setPrompt: Dispatch<SetStateAction<string>>;
  objective: PromptObjective;
  setObjective: Dispatch<SetStateAction<PromptObjective>>;
  detail: PromptDetail;
  setDetail: Dispatch<SetStateAction<PromptDetail>>;
  context: string;
  setContext: Dispatch<SetStateAction<string>>;
  result: string;
  setResult: Dispatch<SetStateAction<string>>;
  questions: PromptQuestion[];
  setQuestions: Dispatch<SetStateAction<PromptQuestion[]>>;
  answers: Record<string, string>;
  setAnswers: Dispatch<SetStateAction<Record<string, string>>>;
  error: string;
  setError: Dispatch<SetStateAction<string>>;
  loadingAction: GenerateMode | null;
  setLoadingAction: Dispatch<SetStateAction<GenerateMode | null>>;
  mode: GenerateMode | null;
  setMode: Dispatch<SetStateAction<GenerateMode | null>>;
};

export const PromptContext = createContext<PromptContextType | null>(null);

export function PromptProvider({ children }: { children: ReactNode }) {
  const [prompt, setPrompt] = useState("");
  const [objective, setObjective] = useState<PromptObjective>("clear");
  const [detail, setDetail] = useState<PromptDetail>("balanced");
  const [context, setContext] = useState("");
  const [result, setResult] = useState("");
  const [questions, setQuestions] = useState<PromptQuestion[]>([]);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [loadingAction, setLoadingAction] = useState<GenerateMode | null>(null);
  const [error, setError] = useState("");
  const [mode, setMode] = useState<GenerateMode | null>(null);

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
        questions,
        setQuestions,
        answers,
        setAnswers,
        error,
        setError,
        loadingAction,
        setLoadingAction,
        mode,
        setMode,
      }}
    >
      {children}
    </PromptContext.Provider>
  );
}
