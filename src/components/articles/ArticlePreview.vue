<template>
  <div class="container">
    <div class="row">
      <h3>{{ article.name }}</h3>
    </div>
    <div>
      <div class="row">
        {{ cutArticleContent(article.content) }}
      </div>
    </div>
    <div class="row justify-content-end">
      <div class="col-2">
        <b-button variant="outline-info">
          Read more <ArrowRight></ArrowRight>
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticlePreview",
  props: {
    article: {
      type: Object,
      required: true
    }
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
