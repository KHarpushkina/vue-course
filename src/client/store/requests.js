"use strict";

import axios from "axios";
const serverURL = "http://localhost:3000";

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

    getArticles(options) {
        return axios.get(serverURL + "/articles", {
            headers: {
                "Authorization": "Bearer " + options.token,
            },
        });
    },

    addArticle(article) {
        return axios.post(serverURL + "/create-article", {
            article,
        });
    },
};
