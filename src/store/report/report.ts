import { ReportStatus } from '../../postgres/table';
import { Question, ReportUser } from '..';

import type { PgReport } from '../../postgres/table';
import { fromUnixTime, toUnixTime } from '../../lib/date';

export type Report = {
  reportID: string;
  status: ReportStatus;
  title: string;
  fund: string;
  preparedOn?: number; // unix timestamp in milliseconds
  authors?: ReportUser[];
  reviewers?: ReportUser[];
  source?: string;
  questions?: Question[];
};

export function toPgReport(report: Report): PgReport {
  return {
    report_id: report.reportID,
    fund: report.fund,
    status: report.status,
    title: report.title,
    source: report.source || null,
    prepared_on: report.preparedOn ? fromUnixTime(report.preparedOn) : null,
  };
}

export function fromPgReport(pgReport: PgReport): Report {
  return {
    reportID: pgReport.report_id,
    status: pgReport.status,
    title: pgReport.title,
    fund: pgReport.fund,
    preparedOn: pgReport.prepared_on
      ? toUnixTime(pgReport.prepared_on)
      : undefined,
    source: pgReport.source || undefined,
  };
}
