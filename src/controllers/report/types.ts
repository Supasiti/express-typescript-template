import {
  CreateQuestionRequest,
  CreateUserRequest,
  QuestionResponse,
  UserResponse,
} from '..';
import { ReportStatus, Role } from '../../postgres/table';

export type CreateReportQuestionRequest = Omit<
  CreateQuestionRequest,
  'reportID'
>;
export type CreateReportRequest = {
  title: string;
  fund: string;
  authors: CreateUserRequest[];
  questions: CreateReportQuestionRequest[];
  status?: ReportStatus;
  preparedOn?: number; // unix timestamp in milliseconds
  source?: string;
};

export type ReportUserResponse = UserResponse & {
  reportID: string;
  reportUserID: string;
  role: Role;
};

export type ReportResponse = {
  reportID: string;
  status: ReportStatus;
  title: string;
  fund: string;
  preparedOn?: number; // unix timestamp in milliseconds
  authors: ReportUserResponse[];
  questions: QuestionResponse[];
  source?: string;
};
