import express from 'express';
import RemoveDuplicatedController from '../controllers/data-grouping-controller';
import ExpressRouterAdapter from '../../../../../config/adapters/express-router-adapter';

const router = express.Router();

const removeDuplicatedController = new RemoveDuplicatedController();
router.post('/', ExpressRouterAdapter.adapt(removeDuplicatedController.removeDuplicatedInArray));

export default router;
