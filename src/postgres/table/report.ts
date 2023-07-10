const ReportID = 'report_id';
const Fund = 'fund';
const Status = 'status';
const Title = 'title';
const Source = 'source';
const PreparedOn = 'prepared_on';
const UpdatedAt = 'updated_at';
const CreatedAt = 'created_at';
const Name = 'report';

export const Report = {
  AllColumns: [
    ReportID,
    Fund,
    Status,
    Title,
    Source,
    PreparedOn,
    UpdatedAt,
    CreatedAt,
  ],
  ReportID,
  Fund,
  Status,
  Title,
  Source,
  PreparedOn,
  UpdatedAt,
  CreatedAt,
  Name,
};

export const reportStatus = {
  draft: 'draft',
  reviewing: 'reviewing',
  published: 'published',
} as const;

export type ReportStatus = keyof typeof reportStatus;

export type PgReport = {
  report_id: string;
  fund: string;
  status: ReportStatus;
  title: string;
  source: string | null;
  prepared_on: Date | null;
  updated_at?: Date;
  created_at?: Date;
}
