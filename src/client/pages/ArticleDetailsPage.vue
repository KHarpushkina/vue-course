<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h1>{{ article.title }}</h1>
            </div>
        </div>
        <div class="row">
            <div class="col categories">
                <div v-for="category in article._category" :key="`${category._id}`">
                    {{ category.name }}
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <p class="article-content">{{ article.content }}</p>
            </div>
        </div>
        <comments :article="article"></comments>
    </div>
</template>

<script>
import Comments from "../components/comments/Comments.vue";

export default {
    name: "ArticleDetailsPage",
    components: {
        Comments,
    },
    props: {
        title: String,
        articleId: String,
    },
    data() {
        return {};
    },
    computed: {
        article: function() {
            return this.$store.getters["articles/getArticleById"](this.articleId);
        },
        articleCategories: function() {
            let result = "";
            for (let i = 0; i < this.article._category.length; i++) {
                result = result + " " + this.article._category[i].name;
            }
            return result;
        },
    },
    methods: {},
    mounted() {},
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.article-content {
    white-space: pre-wrap;
}
.categories {
	margin-left: 2rem;
    font-size: 18px;
    color: var(--bs-secondary);
	display: flex;
	flex-wrap: wrap;
	div {
		margin-right:  8px;
	}
}
</style>
