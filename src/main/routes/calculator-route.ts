import express from 'express';
import CalculatorController from '../../domain/calculator/calculator-controller';
import ExpressRouterAdapter from '../adapters/express-router-adapter';

const router = express.Router();

const calculatorController = new CalculatorController();
router.post('/sum-values', ExpressRouterAdapter.adapt(calculatorController.sumValuesInArray));

export default router;
