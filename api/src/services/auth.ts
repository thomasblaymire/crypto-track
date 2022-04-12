import jwt from 'jsonwebtoken';
import { Response } from 'express';

interface CookieOptions {
  secure?: boolean;
  expires: Date;
  httpOnly: boolean;
}

const signToken = (id: string): string => {
  return jwt.sign({ id }, process.env.JWT_KEY!, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user: any, statusCode: number, res: Response): void => {
  const token = signToken(user._id);
  const cookieExpires = process.env.JWT_COOKIE_EXPIRES_IN as any;

  const cookieOptions: CookieOptions = {
    expires: new Date(Date.now() + cookieExpires * 24 * 60 * 60 * 1000),
    httpOnly: true, // Cookie cannot be modified on browser
  };

  if (process.env.NODE_ENV === 'production') {
    cookieOptions.secure = true; // Cookie only sent on HTTPS
  }

  res.cookie('jwt', token, cookieOptions);

  // Remove password from the output
  user.password = undefined;
  user.passwordChangedAt = undefined;

  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user,
    },
  });
};

export { createSendToken, signToken };
