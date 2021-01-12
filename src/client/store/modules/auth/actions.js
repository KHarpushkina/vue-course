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
            context.commit("loginUser", {
                token: token.data
            });
        } catch (e) {
            console.log(e);
        }
    },
};
