import { createStore } from "vuex";
import articlesModule from "./modules/articles/index.js";
import authModule from "./modules/auth/index.js";

const store = createStore({
    modules: {
        articles: articlesModule,
        auth: authModule
    }
});

export default store;
