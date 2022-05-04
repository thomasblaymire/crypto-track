import express, { Request, Response, NextFunction } from 'express';
import { body } from 'express-validator';
import { Password } from '../../services/password';
import { User } from '../../models/user';
import { createSendToken } from '../../services/auth';
import { validateRequest } from '../../middlewares';
import { catchAsync } from '../../services/async';
import { AppError } from '../../errors';

const router = express.Router();

router.post(
  '/api/users/signin',
  [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password').trim().notEmpty().withMessage('You must supply a password'),
  ],
  validateRequest,
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    const user: any = await User.findOne({ email });
    if (!user) {
      next(
        new AppError(
          'The details you have entered are incorrect. Please check your email and password and try again.',
          400
        )
      );
    }

    const passwordsMatch = await Password.compare(user.password, password);
    if (!passwordsMatch) {
      new AppError(
        'The details you have entered are incorrect. Please check your email and password and try again.',
        401
      );
    }

    createSendToken(user, 200, res);
  })
);

export { router as signinRouter };
