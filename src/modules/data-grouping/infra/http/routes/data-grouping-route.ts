import express from 'express';
import DataGroupingController from '../../../infra/http/controllers/data-grouping-controller';
import ExpressRouterAdapter from '../../../../../config/adapters/express-router-adapter';

const router = express.Router();

const dataGroupingController = new DataGroupingController();
router.post('/', ExpressRouterAdapter.adapt(dataGroupingController.dataGroupingInArray));

export default router;
