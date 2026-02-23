import express from 'express';
import { getNews, createNews } from '../controllers/newsController.js';

const router = express.Router();

router.route('/')
    .get(getNews)
    .post(createNews);

export default router;
