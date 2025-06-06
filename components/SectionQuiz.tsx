
import React, { useState, useCallback } from 'react';
import { QUIZ_QUESTIONS } from '../constants';
import QuizQuestion from './QuizQuestion';
import { QuizAnswersMapType, HintsVisibleMapType, QuizAnswerStateType } from '../types';

const SectionQuiz: React.FC = () => {
  const [answers, setAnswers] = useState<QuizAnswersMapType>({});
  const [hintsVisible, setHintsVisible] = useState<HintsVisibleMapType>({});

  const handleAnswer = useCallback((questionId: number, selectedAnswer: 'Verdadero' | 'Falso') => {
    const question = QUIZ_QUESTIONS.find(q => q.id === questionId);
    if (!question) return;

    const isCorrect = selectedAnswer === question.correctAnswer;
    setAnswers(prev => ({
      ...prev,
      [questionId]: { isCorrect, showFeedback: true },
    }));
  }, []);

  const handleShowHint = useCallback((questionId: number) => {
    setHintsVisible(prev => ({
      ...prev,
      [questionId]: true,
    }));
  }, []);

  return (
    <div>
      <p className="mb-6 text-slate-700">Probemos tus conocimientos con este rápido test de Verdadero/Falso. ¡No te preocupes, el objetivo es aprender!</p>
      {QUIZ_QUESTIONS.map((question, index) => (
        <QuizQuestion
          key={question.id}
          question={question}
          answerState={answers[question.id] as QuizAnswerStateType | undefined}
          hintVisible={hintsVisible[question.id] || false}
          onAnswer={handleAnswer}
          onShowHint={handleShowHint}
          questionNumber={index + 1}
          totalQuestions={QUIZ_QUESTIONS.length}
        />
      ))}
    </div>
  );
};

export default SectionQuiz;
