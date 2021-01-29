import { createStore } from "vuex";
import articlesModule from "./modules/articles/index.js";
import authModule from "./modules/auth/index.js";
import commentsModule from "./modules/comments/index.js";

const store = createStore({
    modules: {
        articles: articlesModule,
        auth: authModule,
        comments: commentsModule
    }
});

export default store;
