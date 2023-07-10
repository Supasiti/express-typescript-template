import express from 'express';

import { reportRoutes } from './reportRoutes';

export const routes = express.Router();

routes.use('/reports', reportRoutes);
