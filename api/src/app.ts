import express from 'express';
import cookieSession from 'cookie-session';
import 'express-async-errors';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';
import compression from 'compression';
import hpp from 'hpp';
import { currentUser } from './middlewares';
import { NotFoundError } from './errors';
import { indexCryptoRouter } from './routes/crypto/index';
import { watchListRouter } from './routes/watchlist';
import { watchListAddRouter } from './routes/watchlist/add';
import { watchListRemoveRouter } from './routes/watchlist/remove';
import { currentUserRouter } from './routes/auth/current-user';
import { signinRouter } from './routes/auth/signin';
import { signoutRouter } from './routes/auth/signout';
import { signupRouter } from './routes/auth/signup';
import { forgotPaswordRouter } from './routes/auth/forgot-password';
import { resetPasswordRouter } from './routes/auth/reset-password';
import { updatePasswordRouter } from './routes/auth/update-password';
import { updateMeRouter } from './routes/user/update-me';
import { deleteMeRouter } from './routes/user/delete-me';
import { allUsersRouter } from './routes/auth/all-users';

const app = express();

// Body parser, reading data from body into req.body (limit for #security)
app.use(express.json({ limit: '10kb' }));

// Data sanitization against NOSQL query injection #security
app.use(mongoSanitize());

// Serving static files
app.use(express.static(`${__dirname}/ public`));

// Gzip compression
app.use(compression());

app.use(
  cookieSession({
    signed: false, // No encryption as JWT already secure
    secure: process.env.NODE_ENV !== 'test', // Must be HTTPS (not during test tho)
  })
);

// Security Security HTTP headers
app.use(helmet());

// Prevent parameter pollution (whitelist allowed params)
app.use(
  hpp({
    whitelist: ['price', 'page', 'cryptoId'],
  })
);

// Used for NGINX requests
app.set('trust proxy', true);

// CORS options temporary
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
app.use(forgotPaswordRouter);
app.use(resetPasswordRouter);
app.use(updatePasswordRouter);
app.use(updateMeRouter);
app.use(deleteMeRouter);
app.use(allUsersRouter);

// Catch all route
app.all('*', async (req, res) => {
  throw new NotFoundError();
});

// app.use(errorHandler);

export { app };
