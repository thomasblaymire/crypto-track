import mongoose from 'mongoose';
import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { BadRequestError } from '../../errors';
import { validateRequest, requireAuth } from '../../middlewares';
import { WatchList } from '../../models/watchlist';

const router = express.Router();

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
  async (req: Request, res: Response) => {
    console.log('TOM req', req);

    // Find the crypto the user is trying to their watchlist
    const { cryptoId } = req.body;

    // Build the watchlist item and save it to the database
    const watchList = WatchList.build({
      userId: req.currentUser!.id,
      cryptoId,
    });

    await watchList.remove();

    res.status(200).send(watchList);
  }
);

export { router as watchListRemoveRouter };
