import type { User } from '..';
import { userDB } from '..';
import { log } from '../../lib/logger';
import { ReportUser, reportUserDB } from '../reportUser';

const firstUser: User = {
  userID: '6e98ad06-0183-483f-a7f1-93751f6739c9',
  firstName: 'first',
  lastName: 'last',
  email: 'f.l@email.com',
};

const secondUser: User = {
  userID: '40d8b569-0e95-49db-832a-c5349f258bb5',
  firstName: 'second',
  lastName: 'last',
  email: 's.l@email.com',
};

const firstAuthor: ReportUser = {
  reportUserID: '9b388447-0475-4056-bfc1-2bd309fcbe7b',
  reportID: '9f37746e-a47f-4dcc-b5ca-254a60b3e202',
  userID: '6e98ad06-0183-483f-a7f1-93751f6739c9',
  firstName: 'first',
  lastName: 'last',
  email: 'f.l@email.com',
  role: 'author'
};

async function createUser() {
  const res1 = await userDB.create([firstUser]);
  log.info(res1);
  const res2 = await userDB.get.byID(firstUser.userID)
  log.info(res2)
  process.exit(0);
}

createUser();
