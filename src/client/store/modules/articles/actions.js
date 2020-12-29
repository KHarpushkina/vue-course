"use strict";
import requests from "../../requests.js";

export default {
    async getArticles(context, data) {
        try {
            let result = await requests.getArticles();
            console.log(result);
        } catch (e) {
            console.log(e);
        }
    },

    async addArticle(context, data) {
        try {
            let result = await requests.addArticle(data.article);
            console.log(result);
        } catch (e) {
            console.log(e);
        }
    },
};
