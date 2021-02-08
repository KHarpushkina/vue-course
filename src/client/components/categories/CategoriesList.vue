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
                    <span class="modal-title" id="staticBackdropLabel">{{ modalHeader }}</span>
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
                            <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                                @change="selectCategory(category, $event)"
                                :checked="isCategorySelectedInArticle(category._id)"
                            />
                            <label class="form-check-label" for="flexCheckDefault">
                                {{ category.name }}
                            </label>
                        </div>
                    </div>
                    <div v-if="!categoryMod && showAddCategorySection" class="add-new-category-block-question row">
                        <div class="col">
                            <span @click="changeCategoryMod(true)" class="link-primary">
                                Didn't find a suitable category? Click here to add new one
                            </span>
                        </div>
                    </div>
                    <div class="add-new-category-block row" v-if="categoryMod && showAddCategorySection">
                        <div class="col-9">
                            <label for="name" class="form-label">Category Name</label>
                            <input type="text" id="name" class="form-control" v-model="newCategory.name" />
                        </div>
                        <div class="col">
                            <button type="button" class="btn btn-outline-primary" @click="addCategory">
                                Add
                            </button>
                        </div>
                        <div class="col">
                            <button type="button" class="btn btn-outline-secondary" @click="changeCategoryMod(false)">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="closeEditing">
                        Close
                    </button>
                    <button type="button" class="btn btn-primary" @click="chooseCategories">Choose</button>
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
            },
            selectedCategories: [],
            categoryMod: false,
        };
    },
    props: {
        articleCategories: {
            type: Array,
            default: () => [],
        },
        modalHeader: {
            type: String,
            required: true,
        },
        showAddCategorySection: {
            type: Boolean,
            default: true,
        },
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
        changeCategoryMod: function(value) {
            this.categoryMod = value;
        },

        closeEditing: function() {
            this.selectedCategories = [];
            this.$emit("onToggle", false);
        },

        isCategorySelectedInArticle: function(categoryId) {
            let result = this.articleCategories.find(function(category) {
                return category._id === categoryId;
            });
            return result ? "checked" : false;
        },

        addCategory: async function() {
            try {
                await this.$store.dispatch("categories/addCategory", {
                    category: {
                        name: this.newCategory.name,
                        last_updated: new Date(),
                    },
                });
                this.newCategory.name = "";
                this.changeCategoryMod(false);
            } catch (e) {
                console.log(e);
            }
        },

        selectCategory: function(category, $event) {
            if ($event.target.checked) {
                this.selectedCategories.push(category);
            } else {
                this.selectedCategories.splice(this.selectedCategories.indexOf(category), 1);
            }
        },

        chooseCategories: function() {
            this.$emit("onChoose", this.selectedCategories);
            this.closeEditing();
        },
    },
    mounted: async function() {
        await this.$store.dispatch("categories/getCategories");
        for (let i = 0; i < this.articleCategories.length; i++) {
            this.selectedCategories.push(this.articleCategories[i]);
        }
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
        flex-direction: column;
        height: 65vh;
        div {
            margin-bottom: 8px;
        }
    }
    .add-new-category-block {
        .col {
            padding: 0 8px;
            button {
                width: 100%;
            }
            align-self: flex-end;
        }
    }
    .link-primary {
        cursor: pointer;
    }
}
</style>
