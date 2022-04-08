import express, { Request, Response } from 'express';
// import { Ticket } from '../models/ticket';
import fetch from 'node-fetch';

const router = express.Router();

router.get('/api/cryptos/:currency/:page', async (req: Request, res: Response) => {
  const { currency, page } = req.params;
  const API_URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=${page}&sparkline=false`;

  if (!currency) {
    throw new Error('Currency must be defined');
  }

  if (!page) {
    throw new Error('Page must be defined');
  }

  const request = await fetch(API_URL);
  const response = await request.json();

  // Look up watchlist items add them to the coingeko response based on id

  res.json(response);

  // const tickets = await Ticket.find({});
  // res.send(tickets);
});

export { router as indexCryptoRouter };
