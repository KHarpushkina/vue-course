"use strict";

export default {
    setArticles(state, data) {
        for (let i = 0; i < data.articles.length; i++) {
            state.articles[data.articles[i]._id] = data.articles[i];
        }
    },

    addArticle(state, data) {
        state.articles[data.article._id] = data.article;
    },

    deleteArticle(state, data) {
        delete state.articles[data.article._id];
    },
};
