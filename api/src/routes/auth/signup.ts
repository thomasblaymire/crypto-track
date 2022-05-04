import express, { Request, Response, NextFunction } from 'express';
import { createSendToken } from '../../services/auth';
import { validateRequest, rateLimiter } from '../../middlewares';
import { AppError } from '../../errors';
import { catchAsync } from '../../services/async';
import { User } from '../../models/user';

const router = express.Router();

router.post(
  '/api/users/signup',
  validateRequest,
  rateLimiter,
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { email, password, name, role } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      next(new AppError('Email in use', 500));
    }

    const newUser = await User.create({
      name,
      email,
      password,
      role,
    });

    createSendToken(newUser, 201, res);
  })
);

export { router as signupRouter };
