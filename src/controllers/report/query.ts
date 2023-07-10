import { RequestHandler } from 'express';
import { ReportResponse } from './types';
import { reportService } from '../../services/report';

type GetByIDParams = {
  reportID: string;
};

export const byID: RequestHandler<GetByIDParams, ReportResponse> = async (
  req,
  res,
  next,
) => {
  try {
    const result = await reportService.get.byID(req.params.reportID);
    res.json(result);
  } catch (error) {
    next(error);
  }
  return Promise.resolve();
};
