import express, { Request, Response } from 'express';
import { WatchList } from '../../models/watchlist';
import { NotFoundError, NotAuthorizedError } from '../../errors';
import { requireAuth, validateRequest, rateLimiter } from '../../middlewares';
import fetch from 'node-fetch';

const router = express.Router();

router.get('/api/cryptos/:currency/:page', validateRequest, rateLimiter, async (req: Request, res: Response) => {
  const { currency, page } = req.params;
  const API_URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=${page}&sparkline=false`;

  if (!currency) {
    throw new Error('Currency must be defined');
  }

  if (!page) {
    throw new Error('Page must be defined');
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
});

export { router as indexCryptoRouter };
