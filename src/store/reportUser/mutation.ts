import { table } from '../../postgres/table';
import { DBTransaction, dbQuery } from '..';
import { ReportUser, fromPgReportUser, toPgReportUser } from './reportUser';

export async function create(reportUsers: ReportUser[], trx?: DBTransaction) {
  const usersToInsert = reportUsers.map((u) => toPgReportUser(u));
  return dbQuery(trx)
    .insert(usersToInsert, table.ReportUser.AllColumns)
    .into(table.ReportUser.Name)
    .then<ReportUser[]>((r) =>
      r.map((t) => {
        const result = fromPgReportUser(t);
        const user = reportUsers.find((u) => u.userID === result.userID);
        return {
          ...result,
          ...user,
        };
      }),
    );
}
