import { PgQuestion } from '../../postgres/table';
import { Report } from '../';

export type Question = {
  questionID: string;
  reportID: string;
  question: string;
  answer: string;
  order: number;
  report?: Report
};

export function toPgQuestion(q: Question): PgQuestion {
  return {
    report_id: q.reportID,
    question_id: q.questionID,
    question: q.question,
    answer: q.answer,
    order: q.order,
  };
}

export function fromPgQuestion(q: PgQuestion): Question {
  return {
    questionID: q.question_id,
    reportID: q.report_id,
    question: q.question,
    answer: q.answer,
    order: q.order,
  };
}
