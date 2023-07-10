import { table } from "../../postgres/table";
import { DBTransaction, dbQuery } from "..";
import { Report, fromPgReport, toPgReport } from "./report";

export async function create(reports: Report[], trx?: DBTransaction) {
  const reportsToInsert = reports.map((r) => toPgReport(r));
  return dbQuery(trx)
    .insert(reportsToInsert, table.Report.AllColumns)
    .into(table.Report.Name)
    .then((result) => {
      return result.map(r => fromPgReport(r));
    }); 
}