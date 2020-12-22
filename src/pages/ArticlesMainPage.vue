<template>
  <div class="articles-list-section">
    <navigation-bar></navigation-bar>
    <!-- <div class="container">
      <div
        v-for="article in articles"
        :key="`${article.name}`"
        :value="`${article.name}`"
        class="row card"
      >
        <div class="col">
          <article-preview :article="article"></article-preview>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
const DATA = require("../database.json");
import ArticlePreview from "../components/articles/ArticlePreview.vue";
import NavigationBar from "../components/layout/NavigationBar.vue";

export default {
  name: "ArticlesMainPage",
  components: {
    ArticlePreview,
    NavigationBar
  },
  data() {
    return {
      articles: [],
    };
  },

  methods: {
    cutArticleContent(content) {
      let result = content.substring(0, 1000);
      result = result.substring(0, result.lastIndexOf(" "));
      return result + "...";
    },
  },

  mounted() {
    this.articles = DATA.articles;
    console.log(2)
  },
};
</script>

<style scoped>
.articles-list-section {
  margin: 3rem;
  padding: 1rem;
}

.row {
  margin-bottom: 10px;
  padding: 1rem;
}
</style>