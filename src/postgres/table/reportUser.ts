const ReportUserID = 'report_user_id';
const ReportID = 'report_id';
const UserID = 'user_id';
const Role = 'role';
const CreatedAt = 'created_at';
const Name = 'report_user';

export const ReportUser = {
  AllColumns: [ReportUserID, ReportID, UserID, Role, CreatedAt, Name],
  ReportUserID,
  ReportID,
  UserID,
  Role,
  CreatedAt,
  Name,
};

export const role = {
  author: 'author',
  reviewer: 'reviewer',
} as const;

export type Role = keyof typeof role;

export type PgReportUser = {
  report_user_id: string;
  report_id: string;
  user_id: string;
  role: Role;
  created_at?: Date;
};
