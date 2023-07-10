import { log } from '../../lib/logger';
import {
  CreateReportQuestionRequest,
  CreateReportRequest,
  CreateUserRequest,
  ReportResponse,
} from '../../controllers';
import { Role, role } from '../../postgres/table';
import {
  reportDB,
  pgDB,
  userDB,
  DBTransaction,
  reportUserDB,
  questionDB,
  User,
} from '../../store';

import { toUser } from '../user';
import {
  defaultReportReponse,
  toQuestion,
  toReport,
  toReportUser,
} from './mapper';

function createUsersIfNotExist(uReq: CreateUserRequest[], trx?: DBTransaction) {
  const newUsers = uReq.map((u) => toUser(u));
  return userDB.create(newUsers, trx);
}

async function createReportUsers(
  uReq: CreateUserRequest[],
  reportID: string,
  role: Role,
  trx?: DBTransaction,
) {
  let existingUsers = await userDB.get.byEmails(uReq.map((u) => u.email));
  let usersToCreate = uReq.filter(
    (u) => !existingUsers.find((t) => t.email === u.email),
  );
  let newUsers: User[] = [];
  if (usersToCreate.length) {
    newUsers = await createUsersIfNotExist(usersToCreate, trx);
  }

  const newReportUsers = [...existingUsers, ...newUsers].map((u) =>
    toReportUser(u, reportID, role),
  );
  return reportUserDB.create(newReportUsers, trx);
}

function createQuestions(
  req: CreateReportQuestionRequest[],
  reportID: string,
  trx?: DBTransaction,
) {
  const newQuestions = req.map((q) => toQuestion(q, reportID));
  return questionDB.create(newQuestions, trx);
}

export async function create(
  crr: CreateReportRequest,
): Promise<ReportResponse | undefined> {
  try {
    return pgDB.transaction(async (trx) => {
      // create a row in report table
      const newReport = toReport(crr);
      const res = await reportDB.create([newReport], trx);
      const result: ReportResponse = { ...defaultReportReponse, ...res[0] };

      // create a report users
      if (crr.authors.length) {
        result.authors = await createReportUsers(
          crr.authors,
          result.reportID,
          role.author,
          trx,
        );
      }

      // create qustions
      result.questions = await createQuestions(
        crr.questions,
        result.reportID,
        trx,
      );
      return result;
    });
  } catch (err) {
    log.error(err, 'reportService.create failed');
  }
}
