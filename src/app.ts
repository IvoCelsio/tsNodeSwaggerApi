import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';

import { requestLoggerMiddleware } from './request.logger.middleware';
import './todo.controller';
import { RegisterRoutes } from './routes';
import * as swaggerUI from 'swagger-ui-express';

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(requestLoggerMiddleware);
RegisterRoutes(app);

try {
   const swaggerDocument = require('../swagger.json');
   app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
} catch (err) {
   console.error('Unable to read swagger.json', err);
}

export { app };
