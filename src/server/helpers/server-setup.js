import Article from "../models/Article.js";
module.exports = {
    async getDocuments(model, selectors = {}, fields = null, options = {}) {
        let result = await model.find(selectors, fields, options).exec();
        if (result) {
            return result;
        } else {
            throw new Error(
                JSON.stringify({
                    status: 404,
                    message: "No such documents in the database",
                })
            );
        }
    },

    async insertDocument(model, document) {
        let result = await Article.save();
        if (result) {
            return result;
        } else {
            throw new Error(
                JSON.stringify({
                    status: 404,
                    message: "Failed to save document",
                })
            );
        }
    },
};
