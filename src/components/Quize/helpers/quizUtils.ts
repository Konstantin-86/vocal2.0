// quizUtils.ts
import { Question, Difficulty, QuizType } from "./types";

export const filterQuestions = (
  allQuestions: Question[],
  level: Difficulty,
  hasMicrophone: boolean,
  quizType: QuizType,
  questionCount: number = 5
): Question[] => {
  const filtered = allQuestions.filter(
    (question) =>
      question.difficulty.includes(level) &&
      (!question.requiresMicrophone || hasMicrophone) &&
      question.quizType.includes(quizType)
  );

  // Перемешиваем и выбираем нужное количество
  return shuffleArray(filtered).slice(0, questionCount);
};

const shuffleArray = <T>(array: T[]): T[] => {
  return array.sort(() => Math.random() - 0.5);
};
