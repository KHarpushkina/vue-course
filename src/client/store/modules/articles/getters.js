"use strict";

export default {
    getArticles(context) {
        return context.articles;
    },

    getArticleById(context) {
        return (id) => {
            return context.articles[id];
        };
    },
};