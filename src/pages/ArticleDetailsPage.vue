<template>
    <h1>Example heading <span class="badge bg-secondary">New</span></h1>
</template>

<script>
export default {
    name: "ArticleDetailsPage",
    components: {},
    props: {
      name: String
    },
    data() {
        return {
            articles: [],
        };
    },

    methods: {},

    mounted() {},
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.articles-list-section {
    margin: 3rem;
    padding: 1rem;
}

.row {
    margin-bottom: 10px;
    padding: 1rem;
}
</style>
