import { Dispatch, SetStateAction } from "react";
import { ReactNode } from "react";

export type TemplatesProps = {
  onSelect: (template: string) => void;
};

export type InfoTooltipProps = {
  children: ReactNode;
  title: string;
};

export type SelectFieldProps<T extends string> = {
  id: string;
  value: T;
  options: {
    value: T;
    label: string;
  }[];
  onChange: (value: T) => void;
};

export type PromptObjective = "clear" | "precise" | "professional" | "creative";

export type PromptDetail = "short" | "balanced" | "detailed";

export type PromptQuestion = {
  id: string;
  question: string;
  example: string;
};

export type PromptAnswer = {
  question: string;
  answer: string;
};

export type PromptApiResponse = {
  result: string;
  questions?: PromptQuestion[];
};

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
  guided: boolean;
  setGuided: Dispatch<SetStateAction<boolean>>;
  questions: PromptQuestion[];
  setQuestions: Dispatch<SetStateAction<PromptQuestion[]>>;
  answers: Record<string, string>;
  setAnswers: Dispatch<SetStateAction<Record<string, string>>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  error: string;
  setError: Dispatch<SetStateAction<string>>;
};

export type PromptRequest = {
  prompt: string;
  objective: PromptObjective;
  detail: PromptDetail;
  context?: string;
  guided?: boolean;
  answers?: PromptAnswer[];
};

export type PromptOption<T extends string> = {
  value: T;
  label: string;
  description: string;
};
