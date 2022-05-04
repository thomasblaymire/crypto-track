import express, { Request, Response, NextFunction } from 'express';
import cookieSession from 'cookie-session';
import cookieParser from 'cookie-parser';
import 'express-async-errors';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';
import compression from 'compression';
import hpp from 'hpp';
import cors from 'cors';
import { currentUser } from './middlewares';
import { AppError } from './errors';
import { globalErrorHandler } from './middlewares';
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
import { meRouter } from './routes/user/me';
import { allUsersRouter } from './routes/auth/all-users';

interface Error {
  statusCode?: number;
  status?: string;
}

const app = express();

// const whitelist = ['http://127.0.0.1:3001', 'http://localhost:3001', 'http://127.0.0.0'];
// const corsOptions = {
//   credentials: true,
//   //@ts-ignore
//   origin: (origin, callback) => {
//     if (whitelist.includes(origin)) return callback(null, true);
//     callback(new Error('Not allowed by CORS'));
//   },
// };

// app.use(cors(corsOptions));

// Body parser, reading data from body into req.body (limit for #security)
app.use(express.json({ limit: '10kb' }));
app.use(cookieParser());

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

// CORS options
// app.use((req, res, next) => {
//   // console.log('TOM req.cookies', req.cookies);
//   res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:3001');
//   res.setHeader('Access-Control-Allow-Credentials', 'true');
//   next();
// });

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
app.use(meRouter);

// Catch all route
app.all('*', (req: Request, res: Response, next: NextFunction) => {
  next(new AppError(`Cant find ${req.originalUrl} on this server!`, 404));
});

// Global error handler
app.use(globalErrorHandler);

export { app };
