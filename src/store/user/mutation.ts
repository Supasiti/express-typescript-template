import { table } from '../../postgres/table';
import { DBTransaction, dbQuery } from '..';
import { User, fromPgUser, toPgUser } from './user';

export async function create(users: User[], trx?: DBTransaction) {
  const usersToInsert = users.map((u) => toPgUser(u));
  return dbQuery(trx)
    .insert(usersToInsert, table.User.AllColumns)
    .into(table.User.Name)
    .then((result) => {
      return result.map((r) => fromPgUser(r));
    });
}
