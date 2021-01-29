<template>
	<div class="container">
		<div class="row">
			<div class="col">
				<h1>{{ article.title }}</h1>
			</div>
		</div>
		<div class="row">
			<div class="col">
				<p>{{ article.content }}</p>
			</div>
		</div>
		<comments :article="article"></comments>
	</div>
</template>

<script>
import Comments from "../components/comments/Comments.vue";

export default {
	name: "ArticleDetailsPage",
	components: {
		Comments,
	},
	props: {
		title: String,
		articleId: String,
	},
	data() {
		return {};
	},
	computed: {
		article: function() {
			return this.$store.getters["articles/getArticleById"](
				this.articleId
			);
		},
	},
	methods: {},
	mounted() {},
};
</script>

<style scoped lang="scss" rel="stylesheet/scss"></style>
