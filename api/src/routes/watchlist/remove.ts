import mongoose from 'mongoose';
import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { validateRequest, requireAuth } from '../../middlewares';
import { WatchList } from '../../models/watchlist';
import { catchAsync } from '../../services';

const router = express.Router();

// REMOVING A CRYPTO FROM A WATCHLIST
// 1. A user sends a post request with a cryptosID to the backend (must match api id)
// 2. We remove the watchlist from the user model with thier id watchlistItems: {'11211', 12312312'};
// 3. Return success or failure to the user

router.post(
  '/api/watchlist/remove',
  requireAuth,
  [
    body('cryptoId')
      .not()
      .isEmpty()
      .custom((input: string) => mongoose.Types.ObjectId.isValid(input)) // Must be a valid mongoId
      .withMessage('CryptoId must be provided'),
  ],
  validateRequest,
  catchAsync(async (req: Request, res: Response) => {
    console.log('TOM req', req.user);

    // Find the crypto the user is trying to their watchlist
    const { cryptoId } = req.body;

    // Build the watchlist item and save it to the database
    const watchList = WatchList.build({
      userId: '123345',
      cryptoId: cryptoId,
    });

    await watchList.remove();

    res.status(200).send(watchList);
  })
);

export { router as watchListRemoveRouter };
