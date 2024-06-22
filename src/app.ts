/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { StudentRoutes } from './app/modules/student/student.route';
import { UserRoutes } from './app/modules/user/user.router';
import globalErrorHandler from './app/middlewares/globalErrorHandling';
import NotFound from './app/middlewares/NotFound/NotFound';
import router from './app/routes';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1/', router);

const test = (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
};
app.get('/', test);
// Error handling
app.use(globalErrorHandler);
// Not Found handler
app.use(NotFound);
export default app;
