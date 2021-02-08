"use strict";
import requests from "../../requests.js";

export default {
    async getArticles(context, data) {
        try {
            let tokenId = context.rootGetters["auth/getTokenId"];
            let result = await requests.getArticles({
                token: tokenId,
            });
            context.commit("setArticles", {
                articles: result.data,
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

    async addArticle(context, data) {
        try {
            let result = await requests.addArticle(data.article);
            context.commit("addArticle", {
                article: result.data,
            });
            context.commit(
                "addNotification",
                {
                    toast: {
                        notificationType: "success",
                        notificationMessage: data.article._id
                            ? "Article was successfully modified"
                            : "Article was successfully creared",
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

    async deleteArticle(context, data) {
        try {
            await requests.deleteArticle(data.article);
            context.commit("deleteArticle", {
                article: data.article,
            });
            context.commit(
                "addNotification",
                {
                    toast: {
                        notificationType: "success",
                        notificationMessage: "Article was successfully deleted",
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
