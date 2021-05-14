import mongoose from 'mongoose';

const opts = { toJSON: { virtuals: true } };

const postSchema = mongoose.Schema({
    name: String,
    cost: Number,
    category: String,
}, opts);

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;