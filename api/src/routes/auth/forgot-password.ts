import express, { Request, Response, NextFunction } from 'express';
import crypto from 'crypto';
import { sendEmail } from '../../services/email';
import { User } from '../../models/user';
import { validateRequest, rateLimiter } from '../../middlewares';
import { BadRequestError } from '../../errors';

const router = express.Router();

router.post(
  '/api/users/forgotPassword',
  validateRequest,
  rateLimiter,
  async (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      throw new BadRequestError('The email you have entered are incorrect.');
    }

    const resetToken = crypto.randomBytes(32).toString('hex');
    const passwordResetToken = crypto.createHash('sha256').update(resetToken).digest('hex');
    const passwordResetExpires = Date.now() + 10 * 60 * 1000;

    user.passwordResetToken = passwordResetToken;
    user.passwordResetExpires = passwordResetExpires;

    // Skip validation before saving a document
    await user.save({
      validateBeforeSave: false,
    });

    const resetURL = `${req.protocol}://${req.get('host')}/api/users/resetPassword/${resetToken}`;
    const message = `Forgot your password? Submit a reset with your new password to ${resetURL}.\nIf you didn't forget your password you may discard this message.`;

    try {
      await sendEmail({
        email: user.email,
        subject: 'Your password reset token (valid for 10 minutes)',
        message,
      });
    } catch (err) {
      user.passwordResetToken = undefined;
      user.passwordResetExpires = undefined;
      await user.save({ validateBeforeSave: false });
      return next(new BadRequestError('There was an error sending the email. Please try again.'));
    }

    res.status(200).json({
      status: 'success',
      message: 'Your password request has been sent successfully',
    });
  }
);

export { router as forgotPaswordRouter };
