import express, { Request, Response, NextFunction } from 'express';
import { AppError } from '../../errors';
import { validateRequest, requireAuth, rateLimiter } from '../../middlewares';
import { WatchList } from '../../models/watchlist';
import { catchAsync } from '../../services';

const router = express.Router();

// router.post(
//   '/api/users/signin',
//   [
//     body('email').isEmail().withMessage('Email must be valid'),
//     body('password').trim().notEmpty().withMessage('You must supply a password'),
//   ],
//   validateRequest,
//   async (req: Request, res: Response) => {
//     const { email, password } = req.body;

router.post(
  '/api/watchlist',
  requireAuth,
  validateRequest,
  rateLimiter,
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    console.log('TOM BACKEND', req.body);
    const { cryptoId } = req.body;

    // Check if user has already added that one
    const existingCrypto = await WatchList.findOne({ cryptoId });
    if (existingCrypto) {
      return next(new AppError('Sorry this crypto has already been added to user watchlist', 400));
    }

    // Build the watchlist item and save it to the database
    const watchList = WatchList.build({
      userId: req.user?.id as any,
      cryptoId,
    });

    await watchList.save();

    res.status(200).send(watchList);
  })
);

export { router as watchListAddRouter };
