import express from 'express';
import 'express-async-errors';
import cookieSession from 'cookie-session';
import { json } from 'body-parser';
import { currentUserRouter } from './routes/current-user';
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';
import { errorHandler, NotFoundError } from '@tbcrypto/common';

const app = express();
app.use(json());
app.set('trust proxy', true); // Due to ingress NGINX
app.use(
  cookieSession({
    signed: false, // No encryption as JWT already secure
    secure: process.env.NODE_ENV !== 'test', // Must be HTTPS (not during test tho)
  })
);

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.all('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
