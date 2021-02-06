<template>
    <div class="container">
        <div class="row border-bottom manage-articles-block">
            <div class="col-6 filters-block"></div>
            <div class="col-6 justify-content-end search-block">
                <div class="input-group">
                    <input type="text" class="form-control" v-model="searchValue" />
                    <button type="button" class="btn btn-secondary" @click="searchArticles">
                        Search by {{ searchMod }}
                    </button>
                    <button
                        type="button"
                        class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    ></button>
                    <ul class="dropdown-menu dropdown-menu-end">
                        <li @click="changeSearchMod('title')"><span class="dropdown-item">By Title</span></li>
                        <li @click="changeSearchMod('author')"><span class="dropdown-item">By Author</span></li>
                    </ul>
                </div>
            </div>
        </div>
        <div
            v-for="article in filteredArticles"
            :key="`${article._id}`"
            :value="`${article._id}`"
            class="row border-top"
        >
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
        return {
            searchValue: "",
            searchMod: "title",
            filteredArticles: {},
        };
    },
    computed: {
        articles: function() {
            return this.$store.getters["articles/getArticles"];
        },
    },
    watch: {
        searchValue: function(newValue) {
            if (!newValue) {
                Object.assign(this.filteredArticles, this.articles);
            }
        },
    },
    methods: {
        changeSearchMod: function(value) {
            this.searchMod = value;
        },

        searchArticles: function() {
            Object.assign(this.filteredArticles, this.articles);
            let searchValueLC = this.searchValue.toLowerCase();

            if (this.searchMod === "title") {
                for (const key in this.filteredArticles) {
                    if (Object.hasOwnProperty.call(this.filteredArticles, key)) {
                        if (this.filteredArticles[key].title.toLowerCase().indexOf(searchValueLC) === -1) {
                            delete this.filteredArticles[key];
                        }
                    }
                }
            } else {
                for (const key in this.filteredArticles) {
                    if (Object.hasOwnProperty.call(this.filteredArticles, key)) {
                        let authorFullName = (
                            this.filteredArticles[key]._author.firstName +
                            " " +
                            this.filteredArticles[key]._author.lastName
                        ).toLowerCase();
                        if (authorFullName.indexOf(searchValueLC) === -1) {
                            delete this.filteredArticles[key];
                        }
                    }
                }
            }
        },
    },
    beforeMount: async function() {
        await this.$store.dispatch("auth/checkUser").then(async () => {
            await this.$store.dispatch("articles/getArticles");
        });
        Object.assign(this.filteredArticles, this.articles);
    },
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.row {
    margin-bottom: 12px;
}
.dropdown-menu {
    margin: 0;
}
</style>
