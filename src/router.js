import { createRouter, createWebHistory } from "vue-router";
import ArticlesMainPage from "./client/pages/ArticlesMainPage.vue";
import ArticleDetailsPage from "./client/pages/ArticleDetailsPage.vue";
import SaveArticlePage from "./client/pages/SaveArticlePage.vue";

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
            path: "/articles/:title",
            props: true,
            component: ArticleDetailsPage,
        },
        {
            name: "save_article",
            path: "/save-article",
            props: true,
            component: SaveArticlePage,
        },
        /*{ path: '/register', component: null },
    { path: '/requests', component: null }, */
        //{ path: '/:notFound(.*)', component: null }
    ],
});

export default router;
