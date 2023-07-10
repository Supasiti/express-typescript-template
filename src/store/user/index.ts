import { create } from './mutation';
import { byEmails, byID } from './query';

export type { User } from './user';

export const userDB = {
  get: {
    byID,
    byEmails,
  },
  create,
};
