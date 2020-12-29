"use strict";
import requests from "../../requests.js";

export default {
    async deleteJob(context, data) {
        try {
            let result = await requests.getArticles();
            console.log(result);
        } catch (e) {
            console.log(e);
        }
    },
};
