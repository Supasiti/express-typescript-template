import { CreateReportRequest } from 'src/controllers';
import { log } from '../lib/logger';
import { reportStatus } from '../postgres/table';
import { reportService } from '../services/report';

const firstAuthor = {
  firstName: 'Steven',
  lastName: 'Peters',
  email: 'speters@ispt.net.au',
};

const mockReport: CreateReportRequest = {
  status: reportStatus.published,
  title: 'ESG and modern slavery questionnaire',
  fund: 'UniSuper',
  preparedOn: 1_626_703_200_000,
  source: 'UniSuper - ESG and modern slavery questionnaire ISPT July 2021.docx',
  authors: [firstAuthor],
  questions: [
    {
      question: 'first question',
      answer: 'first answer',
      order: 0,
    },
  ],
};

async function createReport() {
  const res = await reportService.create(mockReport);
  log.info(res);
  process.exit(0);
}

createReport();
