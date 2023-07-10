import { byID } from './query';
import { create } from './create';

export type * from './types';

export const reportController = {
  get: {
    byID,
  },
  create,
};
