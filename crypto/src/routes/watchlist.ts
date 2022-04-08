import express, { Request, Response } from 'express';
import { requireAuth, NotFoundError, NotAuthorizedError } from '@tbcrypto/common';
import { WatchList } from '../models/watchlist';

const router = express.Router();

router.get(
  '/api/watchlist/',
  // requireAuth,
  async (req: Request, res: Response) => {
    const userId = '6f8abb6578764673a8142';

    //const watchlist = await WatchList.findById(req.currentUser!.id);
    const watchlist = await WatchList.findById(userId);

    console.log('TOM WATCHLIST', watchlist);

    if (!watchlist) {
      throw new NotFoundError();
    }

    // if (watchlist.userId !== req.currentUser!.id) {
    //   throw new NotAuthorizedError();
    // }

    res.send(watchlist);
  }
);

export { router as watchListRouter };
