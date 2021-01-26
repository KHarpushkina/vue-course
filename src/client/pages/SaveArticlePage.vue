<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col fields-block shadow-sm">
                <div class="row border-bottom">
                    <div class="col">
                        <h1>Create new Article</h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <span for="article-author" class="form-label" v-if="user.id">
                            Author : {{ user.firstName + " " + user.lastName }}
                        </span>
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
    </div>
</template>

<script>
export default {
    name: "SaveArticlePage",
    components: {},
    props: {
        article: {
            type: Object
        }
    },
    data() {
        return {
            newArticle: {
                title: "",
                content: "",
                _author: "",
                last_updated: "",
                category: "",
            },
        };
    },
    computed: {
        user: function() {
            return this.$store.getters["auth/getUser"];
        },
    },
    methods: {
        saveArticle: async function() {
            this.newArticle.last_updated = new Date();
            this.newArticle._author = this.user?.id || "";
            try {
                await this.$store.dispatch("articles/addArticle", {
                    article: this.newArticle,
                });
                this.closeEditing();
            } catch (e) {
                console.log(e);
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
        console.log(this.article)
        if (this.article) {
            Object.assign(this.newArticle, this.article);
        }
    },
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.buttons-controls {
    display: flex;
    justify-content: space-between;
    button {
        min-width: 84px;
    }
}
</style>
