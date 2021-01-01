import { createStore } from "vuex";
import articlesModule from "./modules/articles/index.js";

const store = createStore({
    modules: {
        articles: articlesModule,
    }
});

export default store;
