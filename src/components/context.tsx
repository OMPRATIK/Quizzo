export interface question {
  type: string;
  difficulty: string;
  cattegory: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface User {
  name: string;
  id: number;
  pw: string;
  points: number;
}
