<template>
    <div class="container border-top rounded">
        <div class="row">
            <div class="col comments-header">
                <span class="comments-title">Comments</span>
                <span>{{ commentsCount }}</span>
            </div>
        </div>
        <div class="row comments">
            <div class="col">
                <div v-for="comment in comments" :key="`${comment._id}`" class="row comment">
                    <div class="user-block">
                        <div>
                            <div class="user-icon"><font-awesome-icon icon="user"></font-awesome-icon></div>
                            <div>
                                <strong>{{ getAuthorFullName(comment) }}</strong>
                            </div>
                            <div class="date-block">
                                <span>{{ getDate(comment) }}</span>
                            </div>
                        </div>
                        <div class="trash-icon">
                            <font-awesome-icon icon="trash-alt" @click="deleteComment(comment)"></font-awesome-icon>
                        </div>
                    </div>
                    <div class="comment-block">{{ comment.comment_body }}</div>
                </div>
            </div>
        </div>
        <div class="row" v-if="addCommentMod">
            <div class="col">
                <label for="article-content" class="form-label">
                    Comment
                </label>
                <textarea
                    v-model="newComment.comment_body"
                    class="form-control"
                    id="comment-body"
                    rows="2"
                    placeholder="Enter your comment here"
                ></textarea>
            </div>
        </div>
        <div class="row justify-content-end">
            <div class="col-4 add-comment-button" v-if="!addCommentMod">
                <button class="btn btn-outline-secondary" @click="changeCommentMod(true)">
                    <span>Add Comment</span>
                    <font-awesome-icon icon="plus"></font-awesome-icon>
                </button>
            </div>
            <div class="col-4 control-comments-buttons" v-if="addCommentMod">
                <button class="btn btn-danger" @click="changeCommentMod(false)">
                    <span>Cancel</span>
                </button>
                <button class="btn btn-outline-secondary" @click="addComment">
                    <span>Save</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Comments",
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
            addCommentMod: false,
            newComment: {
                comment_body: "",
            },
        };
    },
    computed: {
        user: function() {
            return this.$store.getters["auth/getUser"];
        },
        comments: function() {
            return this.$store.getters["comments/getCommentsByArticleId"](this.article._id) || [];
        },
        commentsCount: function() {
            return Object.keys(this.comments).length;
        },
    },
    methods: {
        getAuthorFullName: function(comment) {
            if (comment._author) {
                return comment._author.firstName + " " + comment._author.lastName;
            }
            return "";
        },

        getDate: function(comment) {
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
            let date = new Date(comment.last_updated);
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

        changeCommentMod: function(value) {
            this.addCommentMod = value;
        },

        addComment: async function() {
            try {
                await this.$store.dispatch("comments/addComment", {
                    comment: {
                        comment_body: this.newComment.comment_body,
                        _author: this.user?.id || "",
                        _article: this.article._id,
                        last_updated: new Date(),
                    },
                    articleId: this.article._id,
                });
                this.changeCommentMod(false);
            } catch (e) {
                console.log(e);
            }
        },

        deleteComment: async function(comment) {
            try {
                await this.$store.dispatch("comments/deleteComment", {
                    comment,
                    articleId: this.article._id,
                });
            } catch (e) {
                console.log(e);
            }
        },
    },
    mounted: async function() {
        await this.$store.dispatch("comments/getCommentsByArticleId", {
            articleId: this.article._id,
        });
    },
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.comments-header {
    span {
        margin-right: 12px;
        font-size: 20px;
    }
    .comments-title {
        font-weight: 500;
    }
}
.comments {
    .comment {
        margin: 0 0 48px 0;
        .user-block {
            display: flex;
            justify-content: space-between;
            div:first-child {
                display: flex;
            }
            .date-block {
                margin-left: 12px;
                color: var(--bs-secondary);
            }
            .user-icon {
                padding: 0 10px;
            }
            svg {
                height: 1.5rem;
                width: 1.5rem;
                color: var(--bs-secondary);
            }
        }
        .comment-block {
            margin: 16px 0 0 48px;
        }
    }
}
.add-comment-button {
    display: flex;
    justify-content: flex-end;
    button {
        svg {
            margin-left: 10px;
        }
    }
}
.control-comments-buttons {
    display: flex;
    justify-content: flex-end;
    button {
        margin-left: 10px;
    }
}
</style>
