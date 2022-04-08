import express from 'express';
import cookieSession from 'cookie-session';
import 'express-async-errors';
import { json } from 'body-parser';
import { errorHandler, currentUser } from './middlewares';
import { NotFoundError } from './errors';
import { indexCryptoRouter } from './routes/crypto/index';
import { watchListRouter } from './routes/watchlist';
import { watchListAddRouter } from './routes/watchlist/add';
import { watchListRemoveRouter } from './routes/watchlist/remove';
import { currentUserRouter } from './routes/auth/current-user';
import { signinRouter } from './routes/auth/signin';
import { signoutRouter } from './routes/auth/signout';
import { signupRouter } from './routes/auth/signup';

const app = express();
app.use(json());
app.set('trust proxy', true); // Due to ingress NGINX
app.use(
  cookieSession({
    signed: false, // No encryption as JWT already secure
    secure: process.env.NODE_ENV !== 'test', // Must be HTTPS (not during test tho)
  })
);

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(currentUser);

app.use(indexCryptoRouter);
app.use(watchListRouter);
app.use(watchListAddRouter);
app.use(watchListRemoveRouter);
app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.all('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
