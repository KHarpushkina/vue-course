"use strict";
import requests from "../../requests.js";

export default {
    async getCategories(context, data) {
        try {
            let result = await requests.getCategories();
            context.commit("setCategories", {
                categories: result.data,
            });
        } catch (e) {
            context.commit(
                "addNotification",
                {
                    toast: {
                        notificationType: "error",
                        notificationMessage: e.message,
                    },
                },
                { root: true }
            );
        }
    },

    async addCategory(context, data) {
        try {
            let result = await requests.addCategory(data.category);
            context.commit("addCategory", {
                category: result.data,
            });
            context.commit(
                "addNotification",
                {
                    toast: {
                        notificationType: "success",
                        notificationMessage: "Your category was successfully added",
                    },
                },
                { root: true }
            );
        } catch (e) {
            context.commit(
                "addNotification",
                {
                    toast: {
                        notificationType: "error",
                        notificationMessage: e.message,
                    },
                },
                { root: true }
            );
        }
    },
};
