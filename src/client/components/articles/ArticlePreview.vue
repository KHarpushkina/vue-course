<template>
    <div class="container rounded">
        <div class="row">
            <div class="col-9 article-title-block">
                <div class="author-block">
                    <div class="user-icon"><font-awesome-icon icon="user"></font-awesome-icon></div>
                    <div>
                        <span>{{ authorFullName }}</span> <span>{{ lastUpdatedDate }}</span>
                    </div>
                </div>
                <span class="article-title">{{ article.title }}</span>
            </div>
            <div class="col-3 control-article-buttons" v-if="isAuthor">
                <button class="btn btn-secondary" @click="goToPage('save_article', { articleId: article._id })">
                    <span>Edit</span>
                    <font-awesome-icon icon="edit"></font-awesome-icon>
                </button>
                <button class="btn btn-danger" @click="toggleConfirmationModal(true)">
                    <span>Delete</span>
                    <font-awesome-icon icon="trash-alt"></font-awesome-icon>
                </button>
            </div>
        </div>
        <div class="row">
            {{ cutArticleContent(article.content) }}
        </div>
        <div class="row read-more-block">
            <div class="col-2">
                <button
                    class="btn btn-outline-secondary read-more-button"
                    @click="goToPage('article_details', { title: article.title, articleId: article._id })"
                >
                    <span class="read-more-text">Read more</span>
                    <font-awesome-icon icon="chevron-right"></font-awesome-icon>
                </button>
            </div>
        </div>
    </div>
    <confirmation-modal
        ref="confirmation-modal"
        @onToggle="toggleConfirmationModal"
        @onSubmitAction="deleteArticle"
        :id="article._id"
    >
        <template v-slot:header>
            <span class="modal-title">Delete article {{ article.title }}</span>
        </template>
        <template v-slot:body>
            <span>Are you sure you want to delete the article?</span>
        </template>
    </confirmation-modal>
</template>

<script>
import ConfirmationModal from "../layout/ConfirmationModal.vue";
const bootstrap = require("bootstrap");

export default {
    name: "ArticlePreview",
    components: {
        ConfirmationModal,
    },
    props: {
        article: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            articles: [],
            confirmationModalElement: null,
        };
    },
    computed: {
        user: function() {
            return this.$store.getters["auth/getUser"];
        },
        isAuthor: function() {
            return this.user.id && this.article._author._id === this.user.id;
        },
        authorFullName: function() {
            return this.article._author.firstName + " " + this.article._author.lastName;
        },
        lastUpdatedDate: function() {
            const months = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
            ];
            let date = new Date(this.article.last_updated);
            return (
                months[date.getMonth()] +
                " " +
                date.getDate() +
                ", " +
                date.getFullYear() +
                " at " +
                ((date.getHours() + "").length === 1 ? "0" + date.getHours() : date.getHours()) +
                ":" +
                ((date.getMinutes() + "").length === 1 ? "0" + date.getMinutes() : date.getMinutes())
            );
        },
    },
    methods: {
        cutArticleContent(content) {
            let result = content.substring(0, 1000);
            result = result.substring(0, result.lastIndexOf(" "));
            return content;
        },

        toggleConfirmationModal: function(show) {
            if (show) {
                this.confirmationModalElement.show();
            } else {
                this.confirmationModalElement.hide();
            }
        },

        goToPage(name, params) {
            this.$router.push({
                name,
                params,
            });
        },

        deleteArticle: async function() {
            try {
                await this.$store.dispatch("articles/deleteArticle", {
                    article: this.article,
                });
                this.toggleConfirmationModal(false);
            } catch (e) {
                console.log(e);
            }
        },
    },
    mounted: function() {
        this.confirmationModalElement = new bootstrap.Modal(this.$refs["confirmation-modal"].$el);
    },
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.row {
    margin-bottom: 10px;
    padding: 1rem;
}
.article-title-block {
    padding: 0;
    .article-title {
        font-weight: 600;
        font-size: 32px;
        padding-left: 0;
    }
    .author-block {
        display: flex;
        span {
            margin-left: 12px;
        }
        span:nth-child(2) {
            color: var(--bs-secondary);
        }
    }
}
.read-more-block {
    padding-left: 0;
    .read-more-button {
        width: 100%;
        .read-more-text {
            margin-right: 20px;
        }
    }
}
.control-article-buttons {
    display: flex;
    justify-content: space-between;
    button {
        min-width: 47%;
        max-height: 40px;
        span {
            float: left;
        }
        svg {
            float: right;
            margin-top: 4px;
        }
    }
}
</style>
