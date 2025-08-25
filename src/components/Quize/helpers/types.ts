export type Difficulty = "beginner" | "amateur" | "advanced" | "professional";
export type QuizType = "serious" | "fun";

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
  difficulty: Difficulty[];
  requiresMicrophone: boolean;
  quizType: QuizType[];
  category: "technique" | "theory" | "ear-training";
}
