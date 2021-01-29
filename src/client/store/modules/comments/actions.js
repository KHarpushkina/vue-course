"use strict";
import requests from "../../requests.js";

export default {
    async getCommentsByArticleId(context, data) {
        try {
            let result = await requests.getCommentsByArticleId(data.articleId);
            context.commit("setCommentsByArticleId", {
                articleId: data.articleId,
                comments: result.data
            });
            console.log(result)
        } catch (e) {
            console.log(e);
        }
    },

    async addComment(context, data) {
        try {
            let result = await requests.addComment(data.comment);
            context.commit("addComment", {
                articleId: data.articleId,
                comment: result
            });
        } catch (e) {
            console.log(e);
        }
    }
};
