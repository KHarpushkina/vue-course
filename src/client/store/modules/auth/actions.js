"use strict";
import requests from "../../requests.js";

export default {
    async addUser(context, data) {
        try {
            await requests.addUser(data.user);
        } catch (e) {
            console.log(e);
        }
    },

    async loginUser(context, data) {
        try {
            let token = await requests.loginUser(data.user);
            let expiresIn = new Date(+new Date() + token.data.expiresIn * 1000);
            document.cookie = `token=${token.data.token}; path=/; expires=Tue, ${expiresIn}`;
            document.cookie = `user=${token.data.signed_user._id}; path=/; expires=Tue, ${expiresIn}`;
            context.commit("loginUser", {
                token: token.data
            });
        } catch (e) {
            console.log(e);
        }
    },

    async checkUser(context, data) {
        try {
            let cookieArray = (document.cookie).split("; ");
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
                        token: cookieObject["token"]
                    }
                });
            }
        } catch (e) {
            console.log(e);
        }
    }
};
