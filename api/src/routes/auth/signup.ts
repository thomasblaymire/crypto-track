import express, { Request, Response } from 'express';
import { createSendToken } from '../../services/auth';
import { validateRequest, rateLimiter } from '../../middlewares';
import { BadRequestError } from '../../errors';
import { User } from '../../models/user';

const router = express.Router();

router.post(
  '/api/users/signup',
  // [
  //   body('email').isEmail().withMessage('Email must be valid'),
  //   body('password').trim().isLength({ min: 4, max: 20 }).withMessage('Password must be between 4 and 20 characters'),
  // ],
  validateRequest,
  rateLimiter,
  async (req: Request, res: Response) => {
    const { email, password, name, role } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new BadRequestError('Email in use');
    }

    const newUser = await User.create({
      name,
      email,
      password,
      role,
    });

    createSendToken(newUser, 201, res);
  }
);

export { router as signupRouter };
