import { createStore } from "vuex";

import articlesModule from "./modules/articles/index.js";

const store = createStore({
    modules: {
        articles: articlesModule,
    },
    state() {
        return {};
    },
    getters: {},
});

export default store;
