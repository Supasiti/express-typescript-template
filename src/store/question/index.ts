import { create } from './mutation';
import { byID, byReportID } from './query';

export type { Question } from './question';

export const questionDB = {
  get: {
    byID,
    byReportID,
  },
  create,
};
