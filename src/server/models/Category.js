import * as mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    last_updated: {
        type: Date,
        required: false,
    },
});

const Category = mongoose.model("Category", categorySchema);
export default Category;
