import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import { errorHandler, NotFoundError, currentUser } from '@tbcrypto/common';
import { indexCryptoRouter } from './routes/index';
import { watchListRouter } from './routes/watchlist';
import { watchListAddRouter } from './routes/watchlist-add';
import { watchListRemoveRouter } from './routes/watchlist-remove';

const app = express();
app.use(json());
app.set('trust proxy', true); // Due to ingress NGINX
app.use(
  cookieSession({
    signed: false, // No encryption as JWT already secure
    secure: process.env.NODE_ENV !== 'test', // Must be HTTPS (not during test tho)
  })
);
app.use(currentUser);

app.use(indexCryptoRouter);
app.use(watchListRouter);
app.use(watchListAddRouter);
app.use(watchListRemoveRouter);

app.all('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
