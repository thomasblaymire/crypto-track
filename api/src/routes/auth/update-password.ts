import express, { Request, Response, NextFunction } from 'express';
import { body } from 'express-validator';
import bcrypt from 'bcrypt';
import { User } from '../../models/user';
import { validateRequest, requireAuth, rateLimiter } from '../../middlewares';
import { createSendToken } from '../../services/auth';
import { BadRequestError, JWTError } from '../../errors';

const router = express.Router();

router.patch(
  '/api/users/updatePassword',
  validateRequest,
  requireAuth,
  rateLimiter,
  async (req: Request, res: Response) => {
    const user = await User.findById(req.user!.id).select('+password');

    // Compare the requested pssword with the acutal password for matching
    const correctPassword = await bcrypt.compare(req.body.passwordCurrent, user!.password);

    if (!correctPassword) {
      console.log('TOM !correctPassword', !correctPassword);
      //return new Error('Your current password is wrong.'); // 401
    }

    user!.password = req.body.password;

    await user!.save();

    createSendToken(user, 200, res);
  }
);

export { router as updatePasswordRouter };