import express, { Request, Response } from 'express';
import { WatchList } from '../../models/watchlist';
import { AppError } from '../../errors';
import { requireAuth, validateRequest, rateLimiter } from '../../middlewares';
import { catchAsync } from '../../services/async';
import fetch from 'node-fetch';

const router = express.Router();

router.get(
  '/api/cryptos/:currency/:page',
  validateRequest,
  rateLimiter,
  catchAsync(async (req: Request, res: Response) => {
    const { currency, page } = req.params;
    const API_URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=${page}&sparkline=false`;

    if (!currency) {
      throw new AppError('Currency must be defined', 401);
    }

    if (!page) {
      throw new AppError('Page must be defined', 401);
    }

    const request = await fetch(API_URL);
    const cryptos = await request.json();
    // const watchlist = await WatchList.find({ userId: req.user?.id });

    // if (watchlist) {
    //   // TODO: Implement a better solution for this ID mapping.
    //   for (let i = 0; i < cryptos.length; i++) {
    //     for (let j = 0; j < watchlist.length; j++) {
    //       if (cryptos[i].id === watchlist[j].cryptoId) {
    //         cryptos[i].isWatched = true;
    //       }
    //     }
    //   }
    // }

    res.json(cryptos);
  })
);

export { router as indexCryptoRouter };
