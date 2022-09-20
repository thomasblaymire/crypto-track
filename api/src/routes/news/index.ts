import express, { Request, Response } from "express";
import { AppError } from "../../errors";
import { validateRequest, rateLimiter } from "../../middlewares";
import { catchAsync } from "../../services/async";
import fetch from "node-fetch";

const router = express.Router();

router.get(
  "/api/news/:query/:page",
  validateRequest,
  rateLimiter,
  catchAsync(async (req: Request, res: Response) => {
    const { query, page } = req.params;
    const API_URL = `https://api.newscatcherapi.com/v2/search?q=${query}&lang=en&sort_by=relevancy&page=${page}`;

    const headers = {
      "x-api-key": process.env.NEWS_API_KEY,
    };

    if (!query) {
      throw new AppError("Query must be defined", 401);
    }

    if (!page) {
      throw new AppError("Page must be defined", 401);
    }

    const request = await fetch(API_URL, {
      method: "GET",
      headers,
    } as any);
    const newsFeed = await request.json();

    res.json(newsFeed);
  })
);

export { router as newsRouter };
