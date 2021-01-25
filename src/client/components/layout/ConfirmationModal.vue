<template>
    <div
        class="modal fade"
        :id="modalId"
        tabindex="-1"
        role="dialog"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
                <form>
                    <div class="modal-header">
                        <slot name="header"></slot>
                    </div>
                    <div class="modal-body">
                        <slot name="body"></slot>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" @click="submitAction">Confirm</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ConfirmationModal",
    components: {},
    props: {
        modalId: {
            type: String
        },
    },
    data() {
        return {
            loginInfo: {
                email: "",
                password: "",
            },
        };
    },
    computed: {},
    methods: {
        submitAction: function() {
            this.$emit("onSubmitAction");
        },
    },
};
</script>

<style scoped lang="scss" rel="stylesheet/scss"></style>
