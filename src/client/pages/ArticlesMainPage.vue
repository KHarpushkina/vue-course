<template>
    <div class="container">
        <div v-for="article in articles" :key="`${article._id}`" :value="`${article._id}`" class="row">
            <article-preview :article="article"></article-preview>
        </div>
    </div>
</template>

<script>
import ArticlePreview from "../components/articles/ArticlePreview.vue";

export default {
    name: "ArticlesMainPage",
    components: {
        ArticlePreview,
    },
    props: ["id"],
    data() {
        return {};
    },
    computed: {
        articles: function() {
            return this.$store.getters["articles/getArticles"];
        },
    },
    methods: {},
    mounted: async function() {
        await this.$store.dispatch("auth/checkUser").then(async () => {
            await this.$store.dispatch("articles/getArticles");
        });
    },
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.row {
    margin-bottom: 12px;
}
</style>
