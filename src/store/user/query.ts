import { PgUser, table } from '../../postgres/table';
import { DBTransaction, dbQuery, pgDB } from '..';
import { User } from './user';

function selectFromUser(trx?: DBTransaction) { 
  return dbQuery(trx)
  .select(pgDB.ref(table.User.UserID).as('userID'))
  .select(pgDB.ref(table.User.FirstName).as('firstName'))
  .select(pgDB.ref(table.User.LastName).as('lastName'))
  .select(pgDB.ref(table.User.Email).as('email'))
  .from<PgUser>(table.User.Name);
}

export async function byID(id: string, trx?: DBTransaction) {
  return selectFromUser(trx)
    .where(table.User.UserID, id)
    .first<User | undefined>()
}

export async function byEmails(emails: string[], trx?: DBTransaction) {
  return selectFromUser(trx)
    .whereIn(table.User.Email, emails)
    .then<User[]>(result => result)
}
