import { createRouter, createWebHistory } from "vue-router";
import ArticlesMainPage from "./client/pages/ArticlesMainPage.vue";
import ArticleDetailsPage from "./client/pages/ArticleDetailsPage.vue";
import CreateArticlePage from "./client/pages/CreateArticlePage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", redirect: "/articles" },
        {
            name: "articles_main_page", 
            path: "/articles", 
            component: ArticlesMainPage 
        },
        {
            name: "article_details",
            path: "/articles/:name",
            props: true,
            component: ArticleDetailsPage,
        },
        {
            name: "create_article",
            path: "/create-new-article",
            props: true,
            component: CreateArticlePage,
        },
        /*{ path: '/register', component: null },
    { path: '/requests', component: null }, */
        //{ path: '/:notFound(.*)', component: null }
    ],
});

export default router;
