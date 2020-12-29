import requests from "../requests.js";

export default {
    async getArticles(context, data) {
        try {
            let articles = await requests.getArticles();
            console.log(articles);
        } catch (e) {
            console.log(e);
        }
    },
};
