import { createRouter, createWebHistory } from "vue-router";
import ArticlesMainPage from "./pages/ArticlesMainPage.vue";
import ArticleDetailsPage from "./pages/ArticleDetailsPage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", redirect: "/articles" },
        { path: "/articles", component: ArticlesMainPage },
        {
            name: "article_details",
            path: "/articles/:name",
            props: true,
            component: ArticleDetailsPage,
        },
        /*{ path: '/register', component: null },
    { path: '/requests', component: null }, */
        //{ path: '/:notFound(.*)', component: null }
    ],
});

export default router;
