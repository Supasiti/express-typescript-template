import { create } from './mutation';
import { byID, byReportIDAndRole } from './query';

export type { ReportUser } from './reportUser';

export const reportUserDB = {
  get: {
    byID,
    byReportIDAndRole,
  },
  create,
};
