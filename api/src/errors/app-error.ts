//@ts-nocheck
interface Error {
  statusCode?: number;
  status?: any;
  isOperational: any;
}
export class AppError extends Error {
  constructor(message: string, statusCode: number) {
    super(message);

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}
