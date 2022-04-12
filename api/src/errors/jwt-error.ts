import { CustomError } from './custom-error';

export class JWTError extends CustomError {
  statusCode = 401;

  serializeErrors() {
    return [{ message: 'Your token is invalid. Please log in again' }];
  }
}
