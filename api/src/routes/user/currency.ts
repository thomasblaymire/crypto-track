import express, { Request, Response, NextFunction } from 'express';
import { User } from '../../models/user';
import { validateRequest, requireAuth } from '../../middlewares';
import { AppError } from '../../errors';
import { filterObject } from '../../services/filter';
import { catchAsync } from '../../services';

const router = express.Router();

router.patch(
  '/api/users/currency',
  validateRequest,
  requireAuth,
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    // Create error if users POST password data
    if (req.body.password) {
      return next(new AppError('This route is not for password updates. Please use /updateMyPassword', 400));
    }

    // Filter out unwanted fields passing only what a user CAN update.
    const filteredBody = filterObject(req.body, 'name', 'email');
    if (req.body.currency) filteredBody.currency = req.body.currency;

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

export { router as currencyRouter };
