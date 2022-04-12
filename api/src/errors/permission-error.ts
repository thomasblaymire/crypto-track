import { CustomError } from './custom-error';

export class PermissionsError extends CustomError {
  statusCode = 403;

  constructor() {
    super('You do not have permission to acces this.');
    Object.setPrototypeOf(this, PermissionsError.prototype);
  }

  serializeErrors() {
    return [{ message: 'You do not have permission to acces this.' }];
  }
}
