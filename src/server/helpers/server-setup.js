import User from "../models/User.js";

module.exports = {
    checkUser(id, res, callback) {
        User.findOne({ _id: id }, (err, user) => {
            if (err) {
                res.send(err);
            } else {
                if (!user) {
                    throw new Error(
                        JSON.stringify({
                            status: 401,
                            message: "Please provide valid email and password",
                        })
                    );
                }
                callback();
            }
        });
    },

    async getDocumentById(model, id, fields = null) {
        let result = await model.findById(id, fields).exec();
        if (result) {
            return result;
        } else {
            throw new Error(
                JSON.stringify({
                    status: 404,
                    message: "No such document in the database",
                })
            );
        }
    },

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

    async saveDocument(document) {
        let result = await document.save();
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

    async deleteDocument(model, selectors) {
        let result = await model.deleteOne(selectors);
        if (result) {
            return result;
        } else {
            throw new Error(
                JSON.stringify({
                    status: 404,
                    message: "Failed to delete document",
                })
            );
        }
    },

    async populateQuery(model, fields, selectors = {}) {
        let result = model
            .find(selectors)
            .populate(fields)
            .exec();
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
};
