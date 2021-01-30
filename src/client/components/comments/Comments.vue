<template>
    <div class="container border rounded">
        <div class="row">
            <div class="col">
                <span class="comments-title">Comments</span>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div v-for="comment in comments" :key="`${comment._id}`" class="row">
                    <div>{{ getAuthorFullName(comment) }}</div>
                    <div class="col">{{ comment.comment_body }}</div>
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
                comment_body: ""
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
    },
    methods: {
        getAuthorFullName: function(comment) {
            if (comment._author) {
                return comment._author.firstName + " " + comment._author.lastName;
            }
            return "";
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
.comments-title {
    font-weight: 600;
    font-size: 20px;
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
