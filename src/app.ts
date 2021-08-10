import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './swagger.json';
import calculatorRoute from './modules/calculator/infra/http/routes/calculator-route';
import removeDuplicatedRoute from './modules/remove-duplicated/infra/http/routes/remove-duplicated-route';
import textFormatterRoute from './modules/text-formatter/infra/routes/text-formatter-route';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/calculator', calculatorRoute);
app.use('/remove-duplicated', removeDuplicatedRoute);
app.use('/text-formatter', textFormatterRoute);

export default app;
