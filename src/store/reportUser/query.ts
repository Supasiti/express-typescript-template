import { DBTransaction, dbQuery, pgDB } from '..';
import { PgReportUser, Role, table } from '../../postgres/table';
import { ReportUser, fromPgReportUser } from './reportUser';

const userIDCol = `${table.ReportUser.Name}.${table.ReportUser.UserID}`;

function selectFromReportUser(trx?: DBTransaction) {
  return dbQuery(trx)
    .select(table.ReportUser.ReportUserID)
    .select(table.ReportUser.ReportID)
    .select(table.ReportUser.Role)
    .select(userIDCol)
    .select(table.User.FirstName)
    .select(table.User.LastName)
    .select(table.User.Email)
    .from<PgReportUser>(table.ReportUser.Name);
}

export async function byID(id: string, trx?: DBTransaction) {
  return selectFromReportUser(trx)
    .where(table.ReportUser.ReportUserID, id)
    .join(table.User.Name, userIDCol, `${table.User.Name}.${table.User.UserID}`)
    .first()
    .then<ReportUser | undefined>((result) =>
      result ? fromPgReportUser(result) : undefined,
    );
}

export async function byReportIDAndRole(
  reportID: string,
  role: Role,
  trx?: DBTransaction,
) {
  return selectFromReportUser(trx)
    .where(table.ReportUser.ReportID, reportID)
    .andWhere(table.ReportUser.Role, role)
    .join(table.User.Name, userIDCol, `${table.User.Name}.${table.User.UserID}`)
    .then<ReportUser[]>((results) => results.map((r) => fromPgReportUser(r)));
}
