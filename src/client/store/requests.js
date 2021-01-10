"use strict";

import axios from "axios";
const serverURL = "http://localhost:3000";

export default {
    addUser(user) {
        return axios.post(serverURL + "/create-user", {
            user,
        });
    },

    getArticles() {
        return axios.get(serverURL + "/articles");
    },

    addArticle(article) {
        return axios.post(serverURL + "/create-article", {
            article,
        });
    },
};
