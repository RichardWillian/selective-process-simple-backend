import express from 'express';
import CalculatorController from '../controllers/calculator-controller';
import ExpressRouterAdapter from '../../../../../config/adapters/express-router-adapter';

const router = express.Router();

const calculatorController = new CalculatorController();
router.post('/sum-values', ExpressRouterAdapter.adapt(calculatorController.sumValuesInArray));

export default router;
