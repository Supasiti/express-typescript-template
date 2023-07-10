import { ReportUser, reportDB, reportUserDB, userDB } from '..';
import { log } from '../../lib/logger';
import { reportStatus } from '../../postgres/table';

const firstUser = {
  userID: 'b8e27fb8-3be3-46d0-a4a8-45d4faa8aea0',
  firstName: 'Steven',
  lastName: 'Peters',
  email: 'speters@ispt.net.au',
};
const firstAuthor = {
  ...firstUser,
  reportUserID: '9b388447-0475-4056-bfc1-2bd309fcbe7b',
  reportID: '9f37746e-a47f-4dcc-b5ca-254a60b3e202',
  role: 'author',
} satisfies ReportUser;

const mockReport = {
  reportID: '9f37746e-a47f-4dcc-b5ca-254a60b3e202',
  status: reportStatus.published,
  title: 'ESG and modern slavery questionnaire',
  fund: 'UniSuper',
  preparedOn: 1_626_703_200_000,
  source: 'UniSuper - ESG and modern slavery questionnaire ISPT July 2021.docx',
  authors: [firstAuthor],
};

async function createReport() {
  const res = await reportDB.create([mockReport]);
  log.info(res);
  const user = await userDB.create([firstUser]);
  log.info(user);
  const res2 = await reportUserDB.create([firstAuthor]);
  log.info(res2);
  const rpuser = await reportUserDB.get.byID(firstAuthor.reportUserID)
  log.info(rpuser)
  process.exit(0);
}

createReport();
