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

export { router as indexCryptoRouter };
