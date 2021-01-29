"use strict";

export default {
    getCommentsByArticleId(context) {
        return (articleId) => {
           return context.comments[articleId];
        };
    },
};