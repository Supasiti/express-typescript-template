import { create } from './mutation';
import { byID } from './query';

export type { Report } from './report';

export const reportDB = {
  get: {
    byID,
  },
  create,
};
