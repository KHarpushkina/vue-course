<template>
    <div class="container">
        <div class="row border-bottom manage-articles-block">
            <div class="col-6 filters-block">
                <button type="button" class="btn btn-secondary" @click="toggleCategoriesModal">
                    Filter by categories
                </button>
                <span class="filtered-categories">{{ filteredCategoriesToShow }}</span>
            </div>
            <div class="col-6 justify-content-end search-block">
                <div class="input-group">
                    <input type="text" class="form-control" v-model="searchValue" />
                    <button type="button" class="btn btn-secondary" @click="filterArticles">
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
        <categories-list
            ref="categories-modal"
            @onToggle="toggleCategoriesModal"
            @onChoose="filterArticles"
            :showAddCategorySection="false"
            modalHeader="Choose categories to filter"
        ></categories-list>
    </div>
</template>

<script>
import ArticlePreview from "../components/articles/ArticlePreview.vue";
import CategoriesList from "../components/categories/CategoriesList.vue";
const bootstrap = require("bootstrap");

export default {
    name: "ArticlesMainPage",
    components: {
        ArticlePreview,
        CategoriesList,
    },
    props: ["id"],
    data() {
        return {
            searchValue: "",
            searchMod: "title",
            filteredArticles: {},
            categoriesListElement: null,
            selectedCategories: [],
            selectedCategoriesToFilter: [],
        };
    },
    computed: {
        articles: function() {
            return this.$store.getters["articles/getArticles"];
        },
        filteredCategoriesToShow: function() {
            let result = [];
            for (let i = 0; i < this.selectedCategoriesToFilter.length; i++) {
                result.push(this.selectedCategoriesToFilter[i].name);
            }
            return result.join(" ");
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

        filterByCategory: function(selectedCategories) {
            this.selectedCategoriesToFilter = selectedCategories;
            let categoriesIds = [];
            for (let i = 0; i < selectedCategories.length; i++) {
                categoriesIds.push(selectedCategories[i]._id);
            }
            for (const key in this.filteredArticles) {
                if (Object.hasOwnProperty.call(this.filteredArticles, key)) {
                    let foundCategory = false;
                    for (let i = 0; i < this.filteredArticles[key]._category.length; i++) {
                        if (categoriesIds.indexOf(this.filteredArticles[key]._category[i]._id) !== -1) {
                            foundCategory = true;
                        }
                    }
                    if (!foundCategory) {
                        delete this.filteredArticles[key];
                    }
                }
            }
        },

        filterArticles: function(selectedCategories) {
            Object.assign(this.filteredArticles, this.articles);
            this.searchArticles();
            this.selectedCategoriesToFilter = [];
            if (selectedCategories && selectedCategories.length) {
                this.filterByCategory(selectedCategories);
            }
        },

        toggleCategoriesModal: function(show) {
            if (show) {
                this.categoriesListElement.show();
            } else {
                this.categoriesListElement.hide();
            }
        },
    },
    beforeMount: async function() {
        await this.$store.dispatch("auth/checkUser").then(async () => {
            await this.$store.dispatch("articles/getArticles");
        });
        this.categoriesListElement = new bootstrap.Modal(this.$refs["categories-modal"].$el);
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
.filtered-categories {
    margin-left: 24px;
}
</style>
