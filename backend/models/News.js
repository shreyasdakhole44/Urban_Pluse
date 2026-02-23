import mongoose from 'mongoose';

const newsSchema = mongoose.Schema({
    title: { type: String, required: true },
    category: { type: String, required: true },
    date: { type: String, required: true },
    content: { type: String, required: true },
    important: { type: Boolean, default: false },
}, {
    timestamps: true
});

const News = mongoose.model('News', newsSchema);

export default News;
