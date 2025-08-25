// Quiz.tsx
"use client";
import { useState, useEffect } from "react";
import { Question } from "./helpers/types";
import styles from "@/styles/Quize/MainQuize.module.css";

interface QuizProps {
  questions: Question[];
}

interface QuizResult {
  score: number;
  total: number;
  date: string;
  answers: {
    questionId: string;
    userAnswer: number;
    correctAnswer: number;
    isCorrect: boolean;
  }[];
}

const Quiz = ({ questions }: QuizProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [userAnswers, setUserAnswers] = useState<{
    [key: string]: number;
  }>({});
  const [showResult, setShowResult] = useState(false);
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  useEffect(() => {
    // Восстанавливаем прогресс из localStorage при загрузке
    const savedProgress = localStorage.getItem("quizProgress");
    if (savedProgress) {
      const { index, answers } = JSON.parse(savedProgress);
      setCurrentQuestionIndex(index);
      setUserAnswers(answers);
    }
  }, []);

  useEffect(() => {
    // Сохраняем прогресс в localStorage при каждом изменении
    localStorage.setItem(
      "quizProgress",
      JSON.stringify({
        index: currentQuestionIndex,
        answers: userAnswers,
      })
    );
  }, [currentQuestionIndex, userAnswers]);

  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null) return;

    // Сохраняем ответ пользователя
    const newUserAnswers = {
      ...userAnswers,
      [currentQuestion.id]: selectedAnswer,
    };
    setUserAnswers(newUserAnswers);

    // Переходим к следующему вопросу или показываем результат
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
    } else {
      calculateResults(newUserAnswers);
    }
  };

  const calculateResults = (answers: { [key: string]: number }) => {
    let score = 0;
    const resultAnswers = questions.map((question) => {
      const userAnswer = answers[question.id];
      const isCorrect = userAnswer === question.correctAnswer;
      if (isCorrect) score++;

      return {
        questionId: question.id,
        userAnswer,
        correctAnswer: question.correctAnswer,
        isCorrect,
      };
    });

    const result: QuizResult = {
      score,
      total: questions.length,
      date: new Date().toLocaleString("ru-RU"),
      answers: resultAnswers,
    };

    setQuizResult(result);
    setShowResult(true);

    // Сохраняем результат в localStorage
    const previousResults = JSON.parse(
      localStorage.getItem("quizResults") || "[]"
    );
    previousResults.push(result);
    localStorage.setItem("quizResults", JSON.stringify(previousResults));

    // Очищаем прогресс
    localStorage.removeItem("quizProgress");
  };

  const getAnswerStatus = (questionIndex: number, optionIndex: number) => {
    if (!showResult) return "";

    const question = questions[questionIndex];
    const userAnswer = userAnswers[question.id];
    const isCorrect = userAnswer === question.correctAnswer;

    if (optionIndex === question.correctAnswer) {
      return styles.correctAnswer;
    }
    if (optionIndex === userAnswer && !isCorrect) {
      return styles.incorrectAnswer;
    }
    return "";
  };

  if (showResult && quizResult) {
    return (
      <div className={styles.container}>
        <div className={styles.result}>
          <h2>🎉 Викторина завершена!</h2>

          <div className={styles.score}>
            <p>
              Ваш результат:{" "}
              <strong>
                {quizResult.score}/{quizResult.total}
              </strong>
            </p>
            <p>
              Процент правильных ответов:{" "}
              <strong>
                {Math.round((quizResult.score / quizResult.total) * 100)}%
              </strong>
            </p>
            <p>Дата прохождения: {quizResult.date}</p>
          </div>

          <div className={styles.answersReview}>
            <h3>Обзор ответов:</h3>
            {questions.map((question, qIndex) => (
              <div key={question.id} className={styles.questionReview}>
                <h4>
                  Вопрос {qIndex + 1}: {question.text}
                </h4>
                <div className={styles.optionsReview}>
                  {question.options.map((option, oIndex) => (
                    <div
                      key={oIndex}
                      className={`${styles.optionReview} ${getAnswerStatus(
                        qIndex,
                        oIndex
                      )}`}
                    >
                      {option}
                      {oIndex === question.correctAnswer && (
                        <span className={styles.correctMarker}>
                          {" "}
                          ✓ Правильный ответ
                        </span>
                      )}
                      {oIndex === userAnswers[question.id] &&
                        oIndex !== question.correctAnswer && (
                          <span className={styles.yourAnswerMarker}>
                            {" "}
                            ✗ Ваш ответ
                          </span>
                        )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <button
            className={styles.restartButton}
            onClick={() => window.location.reload()}
          >
            Пройти викторину снова
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {/* Прогресс бар */}
      <div className={styles.progressContainer}>
        <div
          className={styles.progressBar}
          style={{ width: `${progress}%` }}
        ></div>
        <div className={styles.progressText}>
          Вопрос {currentQuestionIndex + 1} из {questions.length}(
          {Math.round(progress)}%)
        </div>
      </div>

      <div className={styles.questionCard}>
        <h2 className={styles.questionText}>{currentQuestion.text}</h2>

        <div className={styles.options}>
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              className={`${styles.optionButton} ${
                selectedAnswer === index ? styles.selected : ""
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        <button
          onClick={handleNextQuestion}
          disabled={selectedAnswer === null}
          className={styles.nextButton}
        >
          {currentQuestionIndex < questions.length - 1
            ? "Следующий вопрос →"
            : "Завершить викторину"}
        </button>
      </div>
    </div>
  );
};

export default Quiz;
