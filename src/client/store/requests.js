"use strict";

import axios from "axios";
const serverURL = "http://localhost:3000";
const idToken = this.$store.getters["auth/getTokenId"];

export default {
    addUser(user) {
        return axios.post(serverURL + "/create-user", {
            user,
        });
    },

    loginUser(user) {
        return axios.post(serverURL + "/login", {
            user,
        });
    },

    getArticles() {
        return axios.get(serverURL + "/articles", {
            headers: {
                "Authorization": "Bearer " + idToken,
            },
        });
    },

    addArticle(article) {
        return axios.post(serverURL + "/create-article", {
            article,
        });
    },
};
