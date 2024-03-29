import express, { Request, Response, NextFunction } from 'express';
import { User } from '../../models/user';
import { createSendToken } from '../../services/auth';
import { validateRequest, rateLimiter } from '../../middlewares';
import { catchAsync } from '../../services/async';
import { AppError } from '../../errors';
import crypto from 'crypto';

const router = express.Router();

router.patch(
  '/api/users/resetPassword/:token',
  validateRequest,
  rateLimiter,
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    // Get the user based on token
    const hashedToken = crypto.createHash('sha256').update(req.params.token).digest('hex');

    const user = await User.findOne({
      passwordResetToken: hashedToken,
      passwordResetExpires: { $gt: Date.now() },
    });

    // If token has not expired and there is a user set the new password
    if (!user) {
      return next(new AppError('Token is invalid or has expired', 400));
    }

    user.password = req.body.password;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;

    await user.save();

    createSendToken(user, 200, res);
  })
);

export { router as resetPasswordRouter };
