<template>
	<div aria-live="polite" aria-atomic="true" class="position-relative">
		<div class="toast-container position-absolute top-0 end-0 p-3">
			<div
				class="toast"
				role="alert"
				aria-live="assertive"
				aria-atomic="true"
			>
				<div class="toast-header">
					<strong class="me-auto">Bootstrap</strong>
					<small class="text-muted">just now</small>
					<button
						type="button"
						class="btn-close"
						data-bs-dismiss="toast"
						aria-label="Close"
					></button>
				</div>
				<div class="toast-body">
					See? Just like this.
				</div>
			</div>

			<div
				class="toast"
				role="alert"
				aria-live="assertive"
				aria-atomic="true"
			>
				<div class="toast-header">
					<strong class="me-auto">Bootstrap</strong>
					<small class="text-muted">2 seconds ago</small>
					<button
						type="button"
						class="btn-close"
						data-bs-dismiss="toast"
						aria-label="Close"
					></button>
				</div>
				<div class="toast-body">
					Heads up, toasts will stack automatically
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Notification",
	data() {
		return {};
	},
};
</script>

<style lang="scss" rel="stylesheet/scss"></style>
