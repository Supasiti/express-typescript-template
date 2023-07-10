import { DBTransaction, dbQuery, pgDB } from '..';
import { PgQuestion, table } from '../../postgres/table';
import { Question, fromPgQuestion } from './question';

function selectFromQuestion(trx?: DBTransaction) {
  return dbQuery(trx)
    .select(table.Question.QuestionID)
    .select(table.Question.ReportID)
    .select(table.Question.QuestionCol)
    .select(table.Question.Answer)
    .select(table.Question.Order)
    .from<PgQuestion>(table.Question.Name);
}

export async function byID(id: string, trx?: DBTransaction) {
  return selectFromQuestion(trx)
    .where(table.Question.QuestionID, id)
    .first()
    .then<Question | undefined>((result) =>
      result ? fromPgQuestion(result) : undefined,
    );
}

export async function byReportID(reportID: string, trx?: DBTransaction) {
  return selectFromQuestion(trx)
    .where(table.Question.ReportID, reportID)
    .then<Question[]>((result) => result.map((r) => fromPgQuestion(r)));
}
