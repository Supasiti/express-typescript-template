import { create} from './create';
import { byID } from './query';

export const reportService = {
  create,
  get: {
    byID,
  }
};
