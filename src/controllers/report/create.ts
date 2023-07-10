import { RequestHandler } from 'express';
import { CreateReportRequest, ReportResponse } from './types';
import { reportService } from '../../services/report';
import { log } from '../../lib/logger';

//TODO add validation
export const create: RequestHandler<
  unknown,
  ReportResponse,
  CreateReportRequest
> = async (req, res, next) => {
  log.info(`POST: /reports`);
  const reportToCreate = req.body;
  log.info(reportToCreate);

  try {
    const result = await reportService.create(reportToCreate);
    res.json(result);
  } catch (error) {
    next(error);
  }
  return Promise.resolve();
};
