
import { ReactNode } from 'react';

export interface Section {
  id: number;
  title: string;
  icon?: ReactNode;
  component: React.FC;
}

export interface QuizQuestionType {
  id: number;
  text: string;
  correctAnswer: 'Verdadero' | 'Falso';
  hint: string;
  feedbackCorrect: string;
  feedbackIncorrect: string;
}

export interface CatalogItemType {
  id: string;
  title: string;
  description: string;
  references: string;
}

export interface PlanStepType {
  id: string;
  label: string;
  placeholder: string;
}

export type FillInTheBlankAnswersType = {
  [key: string]: string;
};

export type UserFillInTheBlankAnswersType = {
  [key: string]: string;
};

export type QuizAnswerStateType = {
  isCorrect: boolean | null;
  showFeedback: boolean;
};

export type QuizAnswersMapType = {
  [key: number]: QuizAnswerStateType;
};

export type HintsVisibleMapType = {
  [key: number]: boolean;
};

export type PlanInputsType = {
  [key: string]: string;
};

