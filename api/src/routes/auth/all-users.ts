import express, { Request, Response, NextFunction } from 'express';
import { requireAuth, restrictTo } from '../../middlewares';
import { User } from '../../models/user';

const router = express.Router();

router.get('/api/users/all-users', requireAuth, restrictTo('admin'), async (res: Response) => {
  const users = await User.find();
  res.status(200).json({
    status: 'success',
    results: users.length,
    data: {
      users,
    },
  });
});

export { router as allUsersRouter };
