import { PgReportUser, PgUser, Role, role } from '../../postgres/table';
import { User } from '..';

export type ReportUser = {
  reportUserID: string;
  reportID: string;
  role: Role;
} & User;

export function toPgReportUser(r: ReportUser): PgReportUser {
  return {
    report_user_id: r.reportUserID,
    report_id: r.reportID,
    user_id: r.userID,
    role: r.role,
  };
}

export function fromPgReportUser(r: PgReportUser & PgUser): ReportUser {
  return {
    reportUserID: r.report_user_id,
    reportID: r.report_id,
    role: r.role,
    userID: r.user_id,
    firstName: r.first_name,
    lastName: r.last_name,
    email: r.email,
  };
}
