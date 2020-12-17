<template>
  <div class="articles-list-section">
    <div class="container">
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
    </div>
  </div>
</template>

<script>
const DATA = require("../../../server/database.json");
import ArticlePreview from "../ArticlePreview/ArticlePreview.vue";

export default {
  name: "ArticlesList",
  components: {
    ArticlePreview,
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