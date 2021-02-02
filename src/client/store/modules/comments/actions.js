"use strict";
import requests from "../../requests.js";

export default {
    async getCommentsByArticleId(context, data) {
        try {
            let result = await requests.getCommentsByArticleId(data.articleId);
            context.commit("setCommentsByArticleId", {
                articleId: data.articleId,
                comments: result.data,
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

    async addComment(context, data) {
        try {
            let result = await requests.addComment(data.comment);
            context.rootState["auth"].user;
            result.data._author = {
                email: context.rootState["auth"].user.email,
                firstName: context.rootState["auth"].user.firstName,
                lastName: context.rootState["auth"].user.lastName,
                _id: context.rootState["auth"].user.id,
            };
            context.commit("addComment", {
                articleId: data.articleId,
                comment: result.data,
            });
            context.commit(
                "addNotification",
                {
                    toast: {
                        notificationType: "success",
                        notificationMessage: "Your comment was successfully added",
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

    async deleteComment(context, data) {
        try {
            await requests.deleteComment(data.comment);
            context.commit("deleteComment", {
                articleId: data.articleId,
                commentId: data.commentId,
            });
            context.commit(
                "addNotification",
                {
                    toast: {
                        notificationType: "success",
                        notificationMessage: "Your comment was successfully deleted",
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
