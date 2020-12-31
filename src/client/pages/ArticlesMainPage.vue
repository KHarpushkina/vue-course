<template>
	<div class="container">
		<div
			v-for="article in articles"
			:key="`${article.name}`"
			:value="`${article.name}`"
			class="row"
		>
			<article-preview :article="article"></article-preview>
		</div>
	</div>
</template>

<script>
const DATA = require("../../database.json");
import ArticlePreview from "../components/articles/ArticlePreview.vue";

export default {
	name: "ArticlesMainPage",
	components: {
		ArticlePreview,
	},
	props: ["id"],
	data() {
		return {
		};
	},
    computed: {
		articles: function() {
			return this.$store.getters["articles/getArticles"];
		}
    },
	methods: {
		cutArticleContent(content) {
			let result = content.substring(0, 1000);
			result = result.substring(0, result.lastIndexOf(" "));
			return result + "...";
		}
	},
	mounted: async function() {
		await this.$store.dispatch("articles/getArticles");
	},
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.row {
	margin-bottom: 10px;
	padding: 1rem;
}
</style>
