import express, { Request, Response, NextFunction } from 'express';
import { body } from 'express-validator';
import bcrypt from 'bcrypt';
import { User } from '../../models/user';
import { validateRequest, requireAuth, rateLimiter } from '../../middlewares';
import { createSendToken } from '../../services/auth';
import { catchAsync } from '../../services/async';
import { AppError } from '../../errors';

const router = express.Router();

router.patch(
  '/api/users/updatePassword',
  validateRequest,
  requireAuth,
  rateLimiter,
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const user = await User.findById(req.user!.id).select('+password');

    // Compare the requested pssword with the acutal password for matching
    const correctPassword = await bcrypt.compare(req.body.passwordCurrent, user!.password);

    if (!correctPassword) {
      next(new AppError('Your current password is wrong.', 401));
    }

    user!.password = req.body.password;

    await user!.save();

    createSendToken(user, 200, res);
  })
);

export { router as updatePasswordRouter };
