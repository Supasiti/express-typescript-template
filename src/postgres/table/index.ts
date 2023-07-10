import { Report } from './report';
import { User } from './user';
import { Question } from './question';
import { ReportUser } from './reportUser';

export type { PgUser } from './user';
export type { PgReport, ReportStatus } from './report';
export type { PgQuestion } from './question';
export type { PgReportUser, Role } from './reportUser';

export { reportStatus } from './report';
export { role } from './reportUser';

export const table = {
  Report,
  User,
  Question,
  ReportUser,
};
