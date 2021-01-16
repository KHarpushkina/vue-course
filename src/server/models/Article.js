import * as mongoose from 'mongoose';

const articleSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true
    },
    content : {
        type: String,
        required: true
    },
    _author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    last_updated : {
        type: Date,
        required: true
    },
    category : {
        type: String,
        required: false
    }
});

const Article = mongoose.model('Article', articleSchema);
export default Article;
