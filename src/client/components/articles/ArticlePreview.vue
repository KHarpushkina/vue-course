<template>
    <div class="container shadow-sm bg-white rounded">
        <div class="row">
            <h3>{{ article.title }}</h3>
        </div>
        <div>
            <div class="row">
                {{ cutArticleContent(article.content) }}
            </div>
        </div>
        <div class="row justify-content-end">
            <div class="col-2">
                <router-link
                    :to="{
                        name: 'article_details',
                        params: {
                            name: article.name
                        },
                    }"
                >
                    <button class="btn btn-outline-dark">
                        <span class="read-more-text">Read more</span>
                        <font-awesome-icon
                            icon="chevron-right"
                        ></font-awesome-icon>
                    </button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ArticlePreview",
    props: {
        article: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            articles: [],
        };
    },
    methods: {
        cutArticleContent(content) {
            let result = content.substring(0, 1000);
            result = result.substring(0, result.lastIndexOf(" "));
            return result + "...";
        },
    },
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.row {
    margin-bottom: 10px;
    padding: 1rem;
}

.read-more-text {
    margin-right: 20px;
}
</style>
