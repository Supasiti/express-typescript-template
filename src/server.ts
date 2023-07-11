import express from 'express';
import cors from 'cors';

import { log } from './common/logger';
import { SERVER_PORT } from './common/config';
import { errorHandler } from './middlewares/errorHandler';
// import { routes } from './routes';

const app = express();

// Middleware configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,COPY' }));

// app.use('/api/v0', routes);

app.get('/healthcheck', (_, res) => {
  res.send('healthy');
});

// error handler
app.use(errorHandler);

app.listen(SERVER_PORT, () => {
  log.info(`Server is running at http://localhost:${SERVER_PORT}`);
});
