import express from 'express';
import TextFormatterController from '../../infra/controllers/text-formatter-controller';
import ExpressRouterAdapter from '../../../../config/adapters/express-router-adapter';

const router = express.Router();

const textFormatterController = new TextFormatterController();
router.post('/:name/:surName', ExpressRouterAdapter.adapt(textFormatterController.changesFirstLetterToUppercase));

export default router;
