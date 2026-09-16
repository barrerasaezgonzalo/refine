export type SelectFieldProps<T extends string> = {
  id: string;
  value: T;
  options: {
    value: T;
    label: string;
    description: string;
  }[];
  onChange: (value: T) => void;
};

export type PromptObjective = "clear" | "precise" | "professional" | "creative";
export type PromptDetail = "short" | "balanced" | "detailed";

export type PromptQuestion = {
  id: string;
  question: string;
  example: string;
  answer: string;
};

export type PromptApiResponse = {
  result: string;
  questions?: PromptQuestion[];
};

export type PromptRequest = {
  prompt: string;
  objective: PromptObjective;
  detail: PromptDetail;
  context: string;
  mode: GenerateMode;
  questions: PromptQuestion[];
  answers: Record<string, string>;
};

export type PromptOption<T extends string> = {
  value: T;
  label: string;
  description: string;
};

export type GenerateMode = "improve" | "ending" | "guided";

export interface PageHeaderProps {
  title: string;
  description: string;
}
