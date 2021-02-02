"use strict";
import requests from "../../requests.js";

export default {
    async addUser(context, data) {
        try {
            await requests.addUser(data.user);
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

    async loginUser(context, data) {
        try {
            let token = await requests.loginUser(data.user);
            let expiresIn = new Date(+new Date() + token.data.expiresIn * 1000) + "";
            document.cookie = `token=${token.data.token}; path=/;`;
            document.cookie = `user=${token.data.signed_user._id}; path=/;`;
            context.commit("loginUser", {
                token: token.data,
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

    async logOutUser(context) {
        try {
            document.cookie = `token= ; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
            document.cookie = `user= ; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
            context.commit("logOutUser");
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

    async checkUser(context) {
        try {
            let cookieArray = document.cookie.split("; ");
            let cookieObject = {};
            for (let i = 0; i < cookieArray.length; i++) {
                let cookie = cookieArray[i].split("=");
                cookieObject[cookie[0]] = cookie[1];
            }
            if (cookieObject["token"]) {
                let user = await requests.getUser(cookieObject.user);
                context.commit("loginUser", {
                    token: {
                        signed_user: user.data,
                        token: cookieObject["token"],
                    },
                });
            }
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
