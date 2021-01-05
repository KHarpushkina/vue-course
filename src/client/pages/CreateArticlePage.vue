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
                        <label for="article-author" class="form-label">
                            Author
                        </label>
                        <div class="input-group mb-3">
                            <input
                                type="text"
                                v-model="newArticle.author"
                                class="form-control"
                                id="article-author"
                                placeholder="Article author"
                            />
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
                <div class="row justify-content-end">
                    <div class="col-4 buttons-controls">
                        <button class="btn btn-outline-secondary btn-lg" type="button" @click="closeEditing">
                            Close
                        </button>
                        <button class="btn btn-info btn-lg" type="button" @click="saveArticle">
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
    name: "CreateArticlePage",
    components: {},
    data() {
        return {
            newArticle: {
                title: "",
                content: "",
                author: "Kseniya_Harpushkina",
                last_updated: "",
                category: "",
            },
        };
    },
    methods: {
        saveArticle: async function() {
            this.newArticle.last_updated = new Date();
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
    mounted() {},
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.buttons-controls {
    button {
        &:first-child {
            margin-right: 4%;
        }
        min-width: 84px;
        width: 48%;
    }
}
</style>
