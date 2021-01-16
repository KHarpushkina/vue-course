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

    async insertDocument(document) {
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

    async populateQuery(model, modelToPopulate) {
        model
            .find({})
            .populate(modelToPopulate)
            .exec(function(err, result) {
                if (err) {
                    JSON.stringify({
                        status: 404,
                        message: "Failed to save document",
                    });
                } else {
                    return result;
                }
            });
    },
};
