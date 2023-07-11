import { ErrorRequestHandler } from 'express';
import createHttpError from 'http-errors';

import { GeneralError } from '../common/error';
import { log } from '../common/logger';

export const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  if (err instanceof createHttpError.HttpError) {
    res.status(err.statusCode).json(err).end();
    if (err.statusCode >= 400 && err.statusCode < 500) {
      log.warn(err);
    } else {
      log.error(err);
    }
  } else {
    log.error(err);
    res
      .status(500)
      .json(GeneralError('There was an error in the system.'))
      .end();
  }
};
