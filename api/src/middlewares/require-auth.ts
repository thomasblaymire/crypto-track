import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { AppError } from '../errors';
import { User } from '../models/user';

type UserRole = 'admin' | 'user';
interface UserPayload {
  id?: string;
  email: string;
  role: UserRole;
}

declare global {
  namespace Express {
    interface Request {
      user?: UserPayload;
    }
  }
}

export const requireAuth = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  let token;

  // Check the bearer token is present within the request headers
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    throw new AppError('Not authorized', 401);
  }

  // Verification token
  const decoded = jwt.verify(token, process.env.JWT_KEY!) as UserPayload;
  if (!decoded) {
    throw new AppError('Your token is invalid. Please log in again', 401);
  }

  // Check if the user still exists
  const currentUser = await User.findById(decoded.id);
  if (!currentUser) {
    throw new AppError('The user belonging to this token does not exist', 401);
  }

  req.user = currentUser;

  next();
};
