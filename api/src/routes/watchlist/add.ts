import express, { Request, Response } from 'express';
import { BadRequestError } from '../../errors';
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
  catchAsync(async (req: Request, res: Response) => {
    console.log('TOM BACKEND', req.body);
    const { cryptoId } = req.body;

    // Check if user has already added that one
    const existingCrypto = await WatchList.findOne({ cryptoId });
    if (existingCrypto) {
      throw new BadRequestError('Sorry this crypto has already been added to user watchlist.');
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
