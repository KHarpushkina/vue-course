import { createRouter, createWebHistory } from 'vue-router';
import ArticlesMainPage from "./pages/ArticlesMainPage.vue";
import ArticleDetailsPage from "./pages/ArticleDetailsPage.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/articles' },
    { path: '/articles', component: ArticlesMainPage },
    {
      path: '/articles/:name',
      component: ArticleDetailsPage,
      props: true,
      /* children: [
        { path: 'contact', component: null }
      ] */
    },
     /*{ path: '/register', component: null },
    { path: '/requests', component: null }, */
    //{ path: '/:notFound(.*)', component: null }
  ]
});

export default router;