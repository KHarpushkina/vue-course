"use strict";

import axios from "axios";
const serverURL = "http://localhost:3000";

export default {
    getUser(id) {
        return axios.get(serverURL + "/user", {
            params: {
                id: id
            }
        });
    },

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
        return axios.post(serverURL + "/save-article", {
            article,
        });
    },

    deleteArticle(article) {
        return axios.post(serverURL + "/delete-article", {
            article,
        });
    },

    getCommentsByArticleId(articleId) {
        return axios.get(serverURL + "/comments-by-articleid", {
            params: {
                articleId
            }
        });
    },

    addComment(comment) {
        return axios.post(serverURL + "/save-comment", {
            comment,
        });
    },
};
