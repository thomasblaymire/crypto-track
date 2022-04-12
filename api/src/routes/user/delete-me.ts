import express, { Request, Response } from 'express';
import { User } from '../../models/user';
import { validateRequest, requireAuth } from '../../middlewares';

const router = express.Router();

// We don't actually delete the user account but set `actve: false` in case they want to re-activate in the future.
router.delete('/api/users/deleteMe', validateRequest, requireAuth, async (req: Request, res: Response) => {
  await User.findByIdAndUpdate(req.user!.id, {
    active: false,
  });

  res.status(204).json({
    status: 'success',
    data: null,
  });
});

export { router as deleteMeRouter };
