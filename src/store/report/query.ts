import { DBTransaction, dbQuery } from '..';
import { PgReport, table } from '../../postgres/table';
import { Report, fromPgReport } from './report';

function selectFromReport(trx?: DBTransaction) {
  return dbQuery(trx)
    .select(table.Report.ReportID)
    .select(table.Report.Fund)
    .select(table.Report.Status)
    .select(table.Report.Title)
    .select(table.Report.Source)
    .select(table.Report.PreparedOn)
    .from<PgReport>(table.Report.Name);
}

export async function byID(id: string, trx?: DBTransaction) {
  return selectFromReport(trx)
    .where(table.Report.ReportID, id)
    .first()
    .then<Report | undefined>((result) =>
      result ? fromPgReport(result) : undefined,
    );
}
