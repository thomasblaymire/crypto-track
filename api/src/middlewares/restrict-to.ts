import { Request, Response, NextFunction } from 'express';
import { AppError } from '../errors';

type UserRole = 'admin' | 'user';

export const restrictTo = (...roles: UserRole[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      return next(new AppError('Not authorized', 500));
    }

    if (!roles.includes(req.user.role) as any) {
      return next(new AppError('You do not have permission to acces this.', 403));
    }

    next();
  };
};
