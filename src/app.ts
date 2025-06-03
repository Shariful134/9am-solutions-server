import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorhandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';
import cookiePerser from 'cookie-parser';

const app: Application = express();

//parser
app.use(express.json());
app.use(cookiePerser());

app.use(
  cors({
    origin: ['http://localhost:5173'],
    credentials: true,
  }),
);
// origin: ['https://*.yourdomain.com.frontend-alpha-red-90.vercel.app/'],
// origin: [
//   'https://frontend-alpha-red-90.vercel.app',
//   'https://*.frontend-alpha-red-90.vercel.app',
// ],

//application routes
app.use('/api/v1/', router);

app.get('/', (req: Request, res: Response) => {
  res.send('This is Your Server!');
});

// Error Handler
app.use(globalErrorHandler);

//Not Found
app.use(notFound);

export default app;
