import express from 'express';
import DataGroupingController from '../../domain/data-grouping/data-grouping-controller';
import ExpressRouterAdapter from '../adapters/express-router-adapter';

const router = express.Router();

const dataGroupingController = new DataGroupingController();
router.post('/', ExpressRouterAdapter.adapt(dataGroupingController.dataGroupingInArray));

export default router;
