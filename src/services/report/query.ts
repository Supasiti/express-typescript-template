import { log } from '../../lib/logger';
import { DataNotFoundError } from '../../lib/error';
import { ReportResponse } from '../../controllers';
import { questionDB, reportDB, reportUserDB } from '../../store';
import { role } from '../../postgres/table';
import { defaultReportReponse } from './mapper';

export async function byID(id: string): Promise<ReportResponse | undefined> {
  const report = await reportDB.get.byID(id);
  if (!report) {
    log.warn(`Could not find report with reportID: ${id}`);
    throw DataNotFoundError();
  }
  const authors = await reportUserDB.get.byReportIDAndRole(id, role.author);
  const questions = await questionDB.get.byReportID(id);

  const result: ReportResponse = {
    ...report,
    authors,
    questions,
  };

  return result;
}
