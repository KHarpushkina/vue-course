"use strict";

export default {
    setArticles(state, data) {
        for (let i = 0; i < data.articles.length; i++) {
            state.articles[data.articles[i].id] = data.articles[i];
        }
    },
};
