interface AnswerData {
  id: number;
  answer: string;
}

interface QuestionData {
  id: number;
  question: string;
  answers: AnswerData[];
}
