import { Response, NextFunction } from 'express';

const sendDevelopmentError = (err: any, res: Response) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

const sendProductionError = (err: any, res: Response) => {
  // Operational, trusted error: send message to client
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
    // Programming or other unknown error: don't leak error details
  } else {
    // Log basic error
    console.error('ERROR 💥:', err);
    // Send generic messag
    res.status(500).json({
      status: 'error',
      message: 'Somewhing went wrong',
    });
  }
};

export const globalErrorHandler = (err: any, res: Response, next: NextFunction) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    sendDevelopmentError(err, res);
  } else if (process.env.NODE_ENV === 'production') {
    sendProductionError(err, res);
  }
};
