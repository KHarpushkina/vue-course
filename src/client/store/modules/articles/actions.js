"use strict";
import requests from "../../requests.js";

export default {
    async getArticles(context, data) {
        try {
            let result = await requests.getArticles();
            context.commit("setArticles", {
                articles: result.data,
            });
        } catch (e) {
            console.log(e);
        }
    },

    async addArticle(context, data) {
        try {
            let result = await requests.addArticle(data.article);
            context.commit("addArticle", {
                article: result.data,
            });
        } catch (e) {
            console.log(e);
        }
    },

    async editArticle(context, data) {
        try {
            let result = await requests.addArticle(data.article);
            context.commit("addArticle", {
                article: result.data,
            });
        } catch (e) {
            console.log(e);
        }
    },

    async deleteArticle(context, data) {
        try {
            let result = await requests.addArticle(data.article);
            context.commit("addArticle", {
                article: result.data,
            });
        } catch (e) {
            console.log(e);
        }
    },
};
