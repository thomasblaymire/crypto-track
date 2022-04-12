import { Request, Response, NextFunction } from 'express';
import { PermissionsError } from '../errors/permission-error';
import { NotAuthorizedError } from '../errors/not-authorized-error';

type UserRole = 'admin' | 'user';

export const restrictTo = (...roles: UserRole[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      return new NotAuthorizedError();
    }

    if (!roles.includes(req.user.role)) {
      return next(new PermissionsError());
    }

    next();
  };
};
