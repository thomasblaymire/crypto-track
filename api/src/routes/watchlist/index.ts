import express, { Request, Response, NextFunction } from 'express';
import { requireAuth, validateRequest, rateLimiter } from '../../middlewares';
import { AppError } from '../../errors';
import { WatchList } from '../../models/watchlist';
import { catchAsync } from '../../services';

const router = express.Router();

router.get(
  '/api/watchlist/',
  requireAuth,
  validateRequest,
  rateLimiter,
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.user?.id;

    if (!userId) {
      return next(new AppError('Not authorized', 401));
    }

    const watchlist = await WatchList.find({ userId });

    if (!watchlist) {
      return next(new AppError('Not found', 404));
    }

    res.send(watchlist);
  })
);

export { router as watchListRouter };
