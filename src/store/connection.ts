import knex, { Knex } from 'knex';
import { DB } from '../lib/config';

export type DBTransaction = Knex.Transaction<any, any[]>

export const pgDB = knex({
  client: 'pg',
  connection: {
    host: DB.host,
    port: DB.port,
    user: DB.user,
    password: DB.password,
    database: DB.name,
  },
});

export function dbQuery(trx?: DBTransaction) {
  return trx || pgDB;
}
