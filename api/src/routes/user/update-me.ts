import express, { Request, Response } from 'express';
import { User } from '../../models/user';
import { validateRequest, requireAuth } from '../../middlewares';
import { filterObject } from '../../services/filter';
import { catchAsync } from '../../services';

const router = express.Router();

router.patch(
  '/api/users/update-me',
  validateRequest,
  requireAuth,
  catchAsync(async (req: Request, res: Response) => {
    // Create error if users POSTS password data
    if (req.body.password) {
      console.log('TOM error');
      // TOM HANDLE APP ERROR HERE (This route is not for password updates, plase use /updatemypassword) 400
      return;
    }

    // Filter out unwanted fields passing only what a user CAN update.
    const filteredBody = filterObject(req.body, 'name', 'email');

    const updatedUser = await User.findByIdAndUpdate(req.user!.id, filteredBody, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: 'success',
      data: {
        user: updatedUser,
      },
    });
  })
);

export { router as updateMeRouter };
