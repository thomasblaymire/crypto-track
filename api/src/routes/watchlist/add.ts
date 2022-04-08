import mongoose from 'mongoose';
import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { BadRequestError } from '../../errors';
import { validateRequest, requireAuth } from '../../middlewares';
import { WatchList } from '../../models/watchlist';
import { currentUser } from '../../middlewares';

const router = express.Router();

router.post(
  '/api/watchlist',
  requireAuth,
  currentUser,
  // [
  //   body('cryptoId')
  //     .not()
  //     .isEmpty()
  //     .custom((input: string) => mongoose.Types.ObjectId.isValid(input)) // Must be a valid mongoId
  //     .withMessage('CryptoId must be provided'),
  // ],
  validateRequest,
  async (req: Request, res: Response) => {
    // Find the crypto the user is trying to their watchlist
    const { cryptoId } = req.body;
    const userId = req.currentUser?.id;

    // Build the watchlist item and save it to the database
    const watchList = WatchList.build({
      // @ts-ignore
      userId,
      cryptoId,
    });

    await watchList.save();

    res.status(200).send(watchList);
  }
);

export { router as watchListAddRouter };

//GETTIG CRYPTOS WITH WATCHLIST ITEMS
// 1. User requests cryptos from UI
// 2. Backend calls coingeko api
// 3. We then lookup a users watched cryptos based on id
// 4. We then modify to the cryptos to include the watched=ture flag
// 5. We return them to the client ~ vola

// ADDING A CRYPTO TO A WATCHLIST
// 1. A user sends a post request with a cryptosID to the backend (must match api id)
// 2. We store the watchlist on the user model with thier ID watchlistItems: {'11312', '123112', 13121'}
// 3. Return success or failure to the user

// REMOVING A CRYPTO FROM A WATCHLIST
// 1. A user sends a post request with a cryptosID to the backend (must match api id)
// 2. We remove the watchlist from the user model with thier id watchlistItems: {'11211', 12312312'};
// 3. Return success or failure to the user
