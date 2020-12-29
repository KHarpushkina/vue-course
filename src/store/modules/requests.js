import axios from "axios";

export default {

    getArticles() {
        return axios
            .get("/articles")
            .then(function(response) {
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });
    },

};
