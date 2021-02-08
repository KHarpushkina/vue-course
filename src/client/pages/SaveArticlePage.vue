<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col fields-block">
                <div class="row border-bottom">
                    <div class="col">
                        <div class="author-block">
                            <div class="user-icon"><font-awesome-icon icon="user"></font-awesome-icon></div>
                            <div>
                                <span>{{ authorFullName }}</span>
                            </div>
                        </div>
                        <h1>{{ pageHeader }}</h1>
                    </div>
                </div>
                <div class="row category-block">
                    <div class="col">
                        <div class="form-label">
                            <span>
                                <button class="btn btn-secondary" @click="toggleCategoriesModal(true)">
                                    Choose Category
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <label for="article-title" class="form-label">
                            Title
                        </label>
                        <div class="input-group mb-3">
                            <input
                                v-model="newArticle.title"
                                type="text"
                                class="form-control"
                                id="article-title"
                                placeholder="Article title"
                            />
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <label for="article-content" class="form-label">
                            Content
                        </label>
                        <textarea
                            v-model="newArticle.content"
                            class="form-control"
                            id="article-content"
                            rows="20"
                            placeholder="Tell about something"
                        ></textarea>
                    </div>
                </div>
                <div class="row bottom-buttons-row justify-content-end border-top">
                    <div class="buttons-controls">
                        <button class="btn btn-danger" type="button" @click="closeEditing">
                            Close
                        </button>
                        <button class="btn btn-secondary" type="button" @click="saveArticle">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <categories-list
            ref="categories-modal"
            :articleCategories="articleCategories"
            @onToggle="toggleCategoriesModal"
            @onChoose="chooseCategories"
            modalHeader="Choose categories for your article"
        ></categories-list>
    </div>
</template>

<script>
import CategoriesList from "../components/categories/CategoriesList.vue";
const bootstrap = require("bootstrap");

export default {
    name: "SaveArticlePage",
    components: {
        CategoriesList,
    },
    props: {
        articleId: {
            type: String,
        },
    },
    data() {
        return {
            newArticle: {
                title: "",
                content: "",
                _author: "",
                last_updated: "",
                _category: [],
            },
            pageHeader: "",
            selectedCategories: [],
            categoriesListElement: null,
            categoriesWasSelected: false
        };
    },
    computed: {
        user: function() {
            return this.$store.getters["auth/getUser"];
        },
        article: function() {
            return this.$store.getters["articles/getArticleById"](this.articleId);
        },
        articleCategories: function() {
            if (this.article) {
                return this.article._category;
            }
            return [];
        },
        authorFullName: function() {
            if (this.user) {
                return this.user.firstName + " " + this.user.lastName;
            }
            return "";
        },
    },
    methods: {
        saveArticle: async function() {
            try {
                let categories = [];
                if (this.categoriesWasSelected) {
                    categories = this.selectedCategories
                } else if (this.article) {
                    categories = this.article._category;
                }
                let article = {
                    title: this.newArticle.title,
                    content: this.newArticle.content,
                    _author: this.user?.id || "",
                    last_updated: new Date(),
                    _category: categories,
                };
                if (this.article) {
                    article._id = this.article._id;
                }
                await this.$store.dispatch("articles/addArticle", {
                    article,
                });
                this.closeEditing();
            } catch (e) {
                console.log(e);
            }
        },

        chooseCategories: function(categories) {
            this.selectedCategories = [];
            for (let i = 0; i < categories.length; i++) {
                this.selectedCategories.push(categories[i]._id);
            }
            this.categoriesWasSelected = true;
        },

        toggleCategoriesModal: function(show) {
            if (show) {
                this.categoriesListElement.show();
            } else {
                this.categoriesListElement.hide();
            }
        },

        closeEditing: function() {
            this.$router.push({
                name: "articles_main_page",
            });
        },
    },
    mounted: async function() {
        await this.$store.dispatch("auth/checkUser");
        if (this.article) {
            Object.assign(this.newArticle, this.article);
            this.pageHeader = "Edit your article";
        } else {
            this.pageHeader = "Create new Article";
        }
        this.categoriesListElement = new bootstrap.Modal(this.$refs["categories-modal"].$el);
    },
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.author-block {
    display: flex;
    span {
        margin-left: 12px;
        color: var(--bs-secondary);
    }
}
.buttons-controls {
    display: flex;
    justify-content: space-between;
    button {
        min-width: 84px;
    }
}
.article-content {
    white-space: pre-wrap;
}
</style>
