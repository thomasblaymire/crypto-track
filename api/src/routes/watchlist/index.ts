import express, { Request, Response } from 'express';
import { requireAuth, currentUser } from '../../middlewares';
import { NotFoundError, NotAuthorizedError } from '../../errors';
import { WatchList } from '../../models/watchlist';

const router = express.Router();

router.get('/api/watchlist/', requireAuth, currentUser, async (req: Request, res: Response) => {
  const userId = req.currentUser?.id;

  console.log('TOM usserID', req.currentUser?.id);

  if (!userId) {
    throw new NotAuthorizedError();
  }

  const watchlist = await WatchList.find({ userId: req.currentUser?.id });

  if (!watchlist) {
    throw new NotFoundError();
  }

  res.send(watchlist);
});

export { router as watchListRouter };
