"use strict";

export default {
    setCategories(state, data) {
        for (let i = 0; i < data.categories.length; i++) {
            state.categories[data.categories[i]._id] = data.categories[i];
        }
    },

    addCategory(state, data) {
        state.categories[data.category._id] = data.category;
    },
};
