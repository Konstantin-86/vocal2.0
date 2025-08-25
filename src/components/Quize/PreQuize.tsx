
"use client";
import { useState } from "react";
import { filterQuestions } from "./helpers/quizUtils";
import { questions as allQuestions } from "./helpers/questionsData"; // переименовали импорт

import styles from "@/styles/Quize/PreQuize.module.css";

type Answers = {
  level: string | null;
  hasMicrophone: boolean | null;
  quizType: "serious" | "fun" | null;
};

interface PreQuizProps {
  onQuizReady: (questions: any[]) => void;
}

const PreQuiz = ({ onQuizReady }: PreQuizProps) => {
  const [answers, setAnswers] = useState<Answers>({
    level: null,
    hasMicrophone: null,
    quizType: null,
  });

  const [currentStep, setCurrentStep] = useState(0);

  // Переименовали переменную, чтобы избежать конфликта
  const preQuizQuestions = [
    {
      text: "Как ты оцениваешь свой уровень вокала?",
      options: [
        "Новичок (только начинаю)",
        "Любитель (пою для себя)",
        "Продвинутый (занимаюсь регулярно)",
        "Профессионал (пою на сцене)",
      ],
      key: "level",
      values: ["beginner", "amateur", "advanced", "professional"],
    },
    {
      text: "У тебя есть микрофон для записи?",
      options: ["Да", "Нет"],
      key: "hasMicrophone",
      values: [true, false],
    },
    {
      text: "Какой опросник предпочитаешь?",
      options: ["Серьёзный", "Шуточный"],
      key: "quizType",
      values: ["serious", "fun"],
    },
  ];

  const handleAnswer = (index: number) => {
    const currentQuestion = preQuizQuestions[currentStep];
    const value = currentQuestion.values[index];

    const newAnswers = {
      ...answers,
      [currentQuestion.key]: value,
    };

    setAnswers(newAnswers);

    if (currentStep < preQuizQuestions.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      // Все ответы получены, формируем квиз
      const selectedQuestions = filterQuestions(
        allQuestions, // используем импортированные вопросы
        newAnswers.level as any,
        newAnswers.hasMicrophone!,
        newAnswers.quizType!
      );
      onQuizReady(selectedQuestions);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.preTitle}>Предварительный опрос</h2>

      <div className={styles.question}>
        <h3 className={styles.title}>{preQuizQuestions[currentStep].text}</h3>
        <div className={styles.options}>
          {preQuizQuestions[currentStep].options.map((option, index) => (
            <button
              key={option}
              onClick={() => handleAnswer(index)}
              className={styles.optionButton}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.progress}>
        {`Шаг ${currentStep + 1} из ${preQuizQuestions.length}`}
      </div>
    </div>
  );
};

export default PreQuiz;
