import { log } from '../lib/logger';
import { reportService } from '../services/report';

const reportID = 'e445fe95-2807-4e1d-9586-2d56e0edee18'

async function getReport() {
  const res = await reportService.get.byID(reportID);
  log.info(res);
  process.exit(0);
}

getReport();
