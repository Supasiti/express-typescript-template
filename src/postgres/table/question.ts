const ReportID = 'report_id';
const QuestionID = 'question_id';
const QuestionCol = 'question';
const Answer = 'answer';
const Order = 'order';
const UpdatedAt = 'updated_at';
const CreatedAt = 'created_at';
const Name = 'question';

export const Question = {
  AllColumns: [
    ReportID,
    QuestionID,
    QuestionCol,
    Answer,
    Order,
    UpdatedAt,
    CreatedAt,
    Name,
  ],
  ReportID,
  QuestionID,
  QuestionCol,
  Answer,
  Order,
  UpdatedAt,
  CreatedAt,
  Name,
};

export type PgQuestion = {
  report_id: string;
  question_id: string;
  question: string;
  answer: string;
  order: number;
  updated_at?: Date;
  created_at?: Date;
};
