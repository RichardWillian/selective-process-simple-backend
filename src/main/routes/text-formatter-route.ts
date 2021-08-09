import express from 'express';
import TextFormatterController from '../../domain/text-formatter/text-formatter-controller';
import ExpressRouterAdapter from '../adapters/express-router-adapter';

const router = express.Router();

const textFormatterController = new TextFormatterController();
router.post('/:name/:surName', ExpressRouterAdapter.adapt(textFormatterController.changesFirstLetterToUppercase));

export default router;
