import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import calculatorRoute from './modules/calculator/infra/http/routes/calculator-route';
import dataGroupingRoute from './modules/data-grouping/infra/http/routes/data-grouping-route';
import textFormatterRoute from './modules/text-formatter/infra/routes/text-formatter-route';

const app = express();

app.disable('x-powered-by');
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  res.type('json');
  next();
});

app.use('/calculator', calculatorRoute);
app.use('/data-grouping', dataGroupingRoute);
app.use('/text-formatter', textFormatterRoute);

export default app;
