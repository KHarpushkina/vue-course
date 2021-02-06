<template>
    <div
        class="modal fade"
        id="categories-modal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <span class="modal-title" id="staticBackdropLabel">Choose categories for your article</span>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="categories-table border-bottom">
                        <div
                            class="form-check"
                            v-for="category in categories"
                            :key="`${category._id}`"
                            :value="`${category._id}`"
                        >
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                {{ category.name }}
                            </label>
                        </div>
                        <div>
                             <button type="button" class="btn btn-outline-primary" @click="addCategory">
                            Add new category
                        </button>
                        </div>
                    </div>
                    <div class="add-new-category-block" v-if="categoryMod">
                        <label for="name" class="form-label">Category Name</label>
                        <input type="text" id="name" class="form-control" />
                        <label for="description" class="form-label">
                            Category Description
                        </label>
                        <textarea
                            class="form-control"
                            id="description"
                            rows="2"
                            placeholder="Enter your comment here"
                        ></textarea>
                        <button type="button" class="btn btn-outline-primary" @click="addCategory">
                            Add new category
                        </button>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Sign In</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CategoriesList",
    data() {
        return {
            newCategory: {
                name: "",
                description: "",
                last_updated: "",
            },
            categoryMod: false
        };
    },
    computed: {
        user: function() {
            return this.$store.getters["auth/getUser"];
        },
        categories: function() {
            return this.$store.getters["categories/getCategories"] || [];
        },
    },
    methods: {
        addCategory: async function() {
            try {
                await this.$store.dispatch("categories/addCategory", {
                    category: {
                        name: "Big Data",
                        description: "Big Data",
                        last_updated: new Date(),
                    },
                });
            } catch (e) {
                console.log(e);
            }
        },
    },
    mounted: async function() {
        await this.$store.dispatch("categories/getCategories");
    },
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@media screen and (min-width: 576px) {
    .modal-dialog {
        max-width: 800px;
    }
}
.modal-body {
    & > div {
        margin-bottom: 12px;
    }
    .categories-table {
        display: flex;
        flex-wrap: wrap;
        div {
            flex: 1 0 33%;
            margin-bottom: 8px;
        }
    }
}
</style>
