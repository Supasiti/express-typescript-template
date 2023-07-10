import { uuid } from 'uuidv4';
import {
  CreateReportRequest,
  CreateReportQuestionRequest,
  ReportResponse,
} from '../../controllers';
import { Question, Report, ReportUser, User } from '../../store';
import { Role, reportStatus } from '../../postgres/table';

export function toReport(r: CreateReportRequest): Report {
  return {
    reportID: uuid(),
    status: r.status ?? reportStatus.draft,
    title: r.title,
    fund: r.fund,
    preparedOn: r.preparedOn,
    source: r.source,
  };
}

export function toReportUser(
  r: User,
  reportID: string,
  role: Role,
): ReportUser {
  return {
    ...r,
    reportUserID: uuid(),
    reportID,
    role,
  };
}

export function toQuestion(
  req: CreateReportQuestionRequest,
  reportID: string,
): Question {
  return {
    ...req,
    questionID: uuid(),
    reportID,
  };
}

export const defaultReportReponse: ReportResponse = {
  reportID: '',
  status: reportStatus.draft,
  title: '',
  fund: '',
  authors: [],
  questions: [],
};
