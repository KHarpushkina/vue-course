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
        state.comments[data.articleId][data.comment._id] = data.comment;
    },

    deleteComment(state, data) {
        delete state.comments[data.articleId][data.commentId];
    }
};
