<template>
	<div class="container border rounded">
		<div class="row">
			<div class="col">
				<span class="comments-title">Comments</span>
			</div>
		</div>
		<div class="row">
			<div class="col">
				<div
					v-for="comment in comments"
					:key="`${comment._id}`"
					class="row"
				>
					<div class="col"></div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col control-comments-buttons">
				<button class="btn btn-outline-secondary" @click="addComment">
					<span>Add Comment</span>
					<font-awesome-icon icon="plus"></font-awesome-icon>
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Comments",
	props: {
		article: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			articles: [],
			confirmationModalElement: null,
		};
	},
	computed: {
		user: function() {
			return this.$store.getters["auth/getUser"];
		},
		comments: function() {
			return (
				this.$store.getters["comments/getCommentsByArticleId"](
					this.article._id
				) || []
			);
		},
	},
	methods: {
		addComment: async function() {
			try {
				await this.$store.dispatch("comments/addComment", {
					comment: {
                        comment: "Comment 1",
                        _author: this.user.id,
                        _article: this.article._id,
                        last_updated: new Date()
                    },
				});
			} catch (e) {
				console.log(e);
			}
		},
	},
	mounted: async function() {
		await this.$store.dispatch(
			"comments/getCommentsByArticleId",
			this.article._id
		);
        console.log(this.comments)
	},
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.comments-title {
	font-weight: 600;
	font-size: 20px;
}
</style>
