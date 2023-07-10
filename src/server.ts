import express from 'express';
import cors from 'cors';
import createError from 'http-errors';

import { log } from './lib/logger';
import { SERVER_PORT } from './lib/config';
import { routes } from './routes';
import { GeneralError } from './lib/error';

const app = express();

// Middleware configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors({ methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,COPY' }));

app.use('/api/v0', routes);

app.get('/healthcheck', (_, res) => {
  res.send('healthy');
});

// error handler
app.use(
  (
    err: Error,
    _req: express.Request,
    res: express.Response,
    _next: express.NextFunction,
  ) => {
    if (err instanceof createError.HttpError) {
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
  },
);

app.listen(SERVER_PORT, () => {
  log.info(`Server is running at http://localhost:${SERVER_PORT}`);
});
