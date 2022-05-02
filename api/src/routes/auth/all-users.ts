import express, { Response } from 'express';
import { requireAuth, restrictTo } from '../../middlewares';
import { User } from '../../models/user';
import { catchAsync } from '../../services/async';

const router = express.Router();

router.get(
  '/api/users/all-users',
  requireAuth,
  restrictTo('admin'),
  catchAsync(async (res: Response) => {
    const users = await User.find();
    res.status(200).json({
      status: 'success',
      results: users.length,
      data: {
        users,
      },
    });
  })
);

export { router as allUsersRouter };
