import { createStore } from "vuex";
import articlesModule from "./modules/articles/index.js";
import authModule from "./modules/auth/index.js";
import commentsModule from "./modules/comments/index.js";
import categoriesModule from "./modules/categories/index.js";

const store = createStore({
    state: () => ({
        notifications: [],
    }),
    getters: {
        getNotifications(context) {
            return context.notifications;
        },
    },
    mutations: {
        addNotification(state, data) {
            let index = state.notifications.length;
            state.notifications[index] = data.toast;
            setTimeout(() => {
                state.notifications.splice(index, 1);
            }, 7000);
        },
    },
    modules: {
        articles: articlesModule,
        auth: authModule,
        comments: commentsModule,
        categories: categoriesModule
    },
});

export default store;
