import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import calculatorRoute from './main/routes/calculator-route';
import textFormatterRoute from './main/routes/text-formatter-route';

const app = express();

app.disable('x-powered-by');
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  res.type('json');
  next();
});

app.use('/calculator', calculatorRoute);
app.use('/text-formatter', textFormatterRoute);

export default app;
