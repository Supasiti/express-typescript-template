import { table } from "../../postgres/table";
import { DBTransaction, dbQuery } from "..";
import { Question, fromPgQuestion, toPgQuestion } from "./question";

export async function create(questions: Question[], trx?: DBTransaction) {
  const questionsToInsert = questions.map((q) => toPgQuestion(q));
  return dbQuery(trx)
    .insert(questionsToInsert, table.Question.AllColumns)
    .into(table.Question.Name)
    .then((result) => {
      return result.map(q => fromPgQuestion(q));
    }); 
}