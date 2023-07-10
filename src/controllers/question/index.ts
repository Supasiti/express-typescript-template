export type CreateQuestionRequest = {
  reportID: string;
  question: string;
  answer: string;
  order: number;
};

export type QuestionResponse = CreateQuestionRequest & {
  questionID: string;
};
