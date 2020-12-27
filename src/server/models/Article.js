import * as mongoose from 'mongoose';

const articleSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    content : {
        type: String,
        required: true
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
