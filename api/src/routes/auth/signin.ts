import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { Password } from '../../services/password';
import { User } from '../../models/user';
import { createSendToken } from '../../services/auth';
import { validateRequest } from '../../middlewares';
import { catchAsync } from '../../services/async';
import { BadRequestError } from '../../errors';

const router = express.Router();

router.post(
  '/api/users/signin',
  [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password').trim().notEmpty().withMessage('You must supply a password'),
  ],
  validateRequest,
  catchAsync(async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      throw new BadRequestError(
        'The details you have entered are incorrect. Please check your email and password and try again.'
      );
    }

    const passwordsMatch = await Password.compare(user.password, password);
    if (!passwordsMatch) {
      throw new BadRequestError(
        'The details you have entered are incorrect. Please check your email and password and try again.'
      );
    }

    createSendToken(user, 200, res);
  })
);

export { router as signinRouter };
