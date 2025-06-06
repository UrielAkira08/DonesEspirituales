
import React from 'react';
import { QuizQuestionType, QuizAnswerStateType } from '../types';

interface QuizQuestionProps {
  question: QuizQuestionType;
  answerState: QuizAnswerStateType | undefined;
  hintVisible: boolean;
  onAnswer: (questionId: number, selectedAnswer: 'Verdadero' | 'Falso') => void;
  onShowHint: (questionId: number) => void;
  questionNumber: number;
  totalQuestions: number;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  answerState,
  hintVisible,
  onAnswer,
  onShowHint,
  questionNumber,
  totalQuestions,
}) => {
  const hasAnswered = answerState?.showFeedback === true;

  return (
    <div className="quiz-question bg-white border border-slate-200 border-l-4 border-sky-700 p-5 mb-6 rounded-lg shadow-sm">
      <p className="font-semibold text-slate-800 mb-3">
        Pregunta {questionNumber}/{totalQuestions}: <span className="font-normal">{question.text}</span>
      </p>
      <div className="quiz-buttons mb-2">
        <button
          onClick={() => onAnswer(question.id, 'Verdadero')}
          disabled={hasAnswered}
          className="mr-2 mb-2 px-4 py-2 border-2 border-sky-700 bg-white text-sky-700 font-semibold rounded-md transition-all duration-200 hover:bg-sky-700 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Verdadero
        </button>
        <button
          onClick={() => onAnswer(question.id, 'Falso')}
          disabled={hasAnswered}
          className="mr-2 mb-2 px-4 py-2 border-2 border-sky-700 bg-white text-sky-700 font-semibold rounded-md transition-all duration-200 hover:bg-sky-700 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Falso
        </button>
      </div>
      {!hasAnswered && (
        <button
          className="hint-button bg-transparent border-none text-sky-600 underline cursor-pointer italic text-sm hover:text-sky-800"
          onClick={() => onShowHint(question.id)}
        >
          Mostrar pista
        </button>
      )}
      {hintVisible && !hasAnswered && (
        <div className="hint italic text-slate-600 mt-3 text-sm p-3 bg-slate-50 rounded-md">
          {question.hint}
        </div>
      )}
      {answerState?.showFeedback && (
        <div
          className={`feedback p-3 mt-4 rounded-md font-medium text-sm ${
            answerState.isCorrect
              ? 'bg-green-50 text-green-700 border border-green-300'
              : 'bg-red-50 text-red-700 border border-red-300'
          }`}
        >
          {answerState.isCorrect ? question.feedbackCorrect : question.feedbackIncorrect}
        </div>
      )}
    </div>
  );
};

export default QuizQuestion;
