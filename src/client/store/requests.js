"use strict";

import axios from "axios";
const serverURL = "http://localhost:3000";

export default {
    getArticles() {
        return axios
            .get(serverURL + "/articles")
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    },

    addArticle(article) {
        return axios
            .post(serverURL + "/create-article", {
                article
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    },
};
