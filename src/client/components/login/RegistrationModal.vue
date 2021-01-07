<template>
    <div
        class="modal fade"
        id="registration-modal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Registration</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <label for="email" class="form-label">Email Address</label>
                        <input type="text" id="email" class="form-control" />
                    </div>
                    <div class="row border-top">
                        <label for="first-name" class="form-label">First Name</label>
                        <input type="text" id="first-name" class="form-control" />
                    </div>
                    <div class="row border-top">
                        <label for="last-name" class="form-label">Last Name</label>
                        <input type="text" id="last-name" class="form-control" />
                    </div>
                    <div class="row border-top">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" id="password" class="form-control" />
                    </div>
                    <div class="row border-top">
                        <label for="repeat-password" class="form-label">Repeat Password</label>
                        <input type="password" id="repeat-password" class="form-control" />
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Sign Up</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "RegistrationPage",
    components: {},
    data() {
        return {};
    },
    computed: {},
    methods: {},
    mounted: async function() {},
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.modal-footer, .modal-header {
  justify-content: center;
}
</style>
