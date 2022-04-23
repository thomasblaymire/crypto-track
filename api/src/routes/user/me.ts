import express, { Request, Response } from 'express';
import { User } from '../../models/user';
import { validateRequest, requireAuth } from '../../middlewares';
import { catchAsync } from '../../services';

const router = express.Router();

// We don't actually delete the user account but set `actve: false` in case they want to re-activate in the future.
router.get(
  '/api/users/me',
  validateRequest,
  requireAuth,
  catchAsync(async (req: Request, res: Response) => {
    const user = await User.findById(req.user!.id);
    res.status(200).json({
      status: 'success',
      data: {
        user,
      },
    });
  })
);

export { router as meRouter };
