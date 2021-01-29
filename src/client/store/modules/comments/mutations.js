"use strict";

export default {
    setCommentsByArticleId(state, data) {
        state.comments = {
            [data.articleId]: {}
        }
        for (let i = 0; i < data.comments.length; i++) {
            state.comments[data.articleId][data.comments[i]._id] = data.comments[i];
        }
    },

    addComment(state, data) {
        /* for (let i = 0; i < data.articles.length; i++) {
            state.articles[data.articles[i]._id] = data.articles[i];
        } */
    }
};
