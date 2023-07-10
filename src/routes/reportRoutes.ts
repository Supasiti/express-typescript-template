import express from "express";

import { reportController } from "../controllers";

export const reportRoutes = express.Router();

reportRoutes.post('/',  reportController.create);

reportRoutes.get('/:reportID',  reportController.get.byID);

