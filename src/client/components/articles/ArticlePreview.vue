<template>
    <div class="container shadow-sm bg-white rounded">
        <div class="row">
            <div class="col-9">
                <span class="article-title">{{ article.title }}</span>
            </div>
            <div class="col-3 control-article-buttons">
                <button class="btn btn-secondary">
                    <span>Edit</span>
                    <font-awesome-icon icon="edit"></font-awesome-icon>
                </button>
                <button class="btn btn-danger" @click="toggleConfirmationModal(true)">
                    <span>Delete</span>
                    <font-awesome-icon icon="trash-alt"></font-awesome-icon>
                </button>
            </div>
        </div>
        <div class="row">Author: {{ authorFullName }}</div>
        <div class="row">
            {{ cutArticleContent(article.content) }}
        </div>
        <div class="row justify-content-end">
            <div class="col-2">
                <button class="btn btn-outline-secondary read-more-button" @click="goToArticleDetails">
                    <span class="read-more-text">Read more</span>
                    <font-awesome-icon icon="chevron-right"></font-awesome-icon>
                </button>
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
    </div>
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
        authorFullName: function () {
           return this.article._author.firstName + " " + this.article._author.lastName
        }
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

        goToArticleDetails() {
            this.$router.push({
                name: "article_details",
                params: {
                    title: this.article.title,
                },
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
.read-more-text {
    margin-right: 20px;
}
.article-title {
    font-weight: 600;
    font-size: 28px;
}
.control-article-buttons {
    display: flex;
    justify-content: space-between;
    button {
        min-width: 47%;
        span {
            float: left;
        }
        svg {
            float: right;
            margin-top: 4px;
        }
    }
}
.read-more-button {
    width: 100%;
}
</style>
