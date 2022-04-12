export class JWTError {
  statusCode = 401;

  serializeErrors() {
    return [{ message: 'Your token is invalid. Please log in again' }];
  }
}
