import News from '../models/News.js';

// @desc    Get all news
// @route   GET /api/news
// @access  Public
export const getNews = async (req, res) => {
    try {
        const news = await News.find({}).sort({ createdAt: -1 });
        res.json(news);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create a news item
// @route   POST /api/news
// @access  Public (Should be Admin in real world)
export const createNews = async (req, res) => {
    try {
        const { title, category, date, content, important } = req.body;
        const news = await News.create({
            title,
            category,
            date,
            content,
            important
        });
        res.status(201).json(news);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
