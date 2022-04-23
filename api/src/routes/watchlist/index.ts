import express, { Request, Response } from 'express';
import { requireAuth, currentUser, validateRequest, rateLimiter } from '../../middlewares';
import { NotFoundError, NotAuthorizedError } from '../../errors';
import { WatchList } from '../../models/watchlist';

const router = express.Router();

router.get('/api/watchlist/', requireAuth, validateRequest, rateLimiter, async (req: Request, res: Response) => {
  const userId = req.user?.id;

  if (!userId) {
    throw new NotAuthorizedError();
  }

  const watchlist = await WatchList.find({ userId });

  if (!watchlist) {
    throw new NotFoundError();
  }

  res.send(watchlist);
});

export { router as watchListRouter };
