import { CustomError } from './custom-error';

export class EmailError extends CustomError {
  statusCode = 404;

  serializeErrors() {
    return [{ message: 'There is no user with that email address.' }];
  }
}
