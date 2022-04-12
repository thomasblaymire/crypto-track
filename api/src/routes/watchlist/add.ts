import mongoose from 'mongoose';
import express, { Request, Response } from 'express';
import { BadRequestError } from '../../errors';
import { validateRequest, requireAuth, restrictTo, rateLimiter } from '../../middlewares';
import { WatchList } from '../../models/watchlist';
import { currentUser } from '../../middlewares';

const router = express.Router();

router.post('/api/watchlist', requireAuth, validateRequest, rateLimiter, async (req: Request, res: Response) => {
  const { cryptoId, userId } = req.body;

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
});

export { router as watchListAddRouter };
