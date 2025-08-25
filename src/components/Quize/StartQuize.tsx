// App.tsx
"use client";
import { useState } from "react";
import PreQuiz from "./PreQuize";
import Quiz from "./Quiz";
import { Question } from "./helpers/types";

export default function Home() {
  const [quizQuestions, setQuizQuestions] = useState<Question[] | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);

  const handleQuizReady = (questions: any[]) => {
    setQuizQuestions(questions);
    setShowQuiz(true);
  };

  if (showQuiz && quizQuestions) {
    return <Quiz questions={quizQuestions} />;
  }

  return <PreQuiz onQuizReady={handleQuizReady} />;
}
