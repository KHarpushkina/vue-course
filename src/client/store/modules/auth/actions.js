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
            await requests.loginUser(data.user);
        } catch (e) {
            console.log(e);
        }
    },
};
