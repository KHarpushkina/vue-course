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
                    <div class="row border-top">
                        <label for="first-name" class="form-label">First Name</label>
                        <input type="text" id="first-name" class="form-control" v-model="newUser.first_name" />
                    </div>
                    <div class="row border-top">
                        <label for="last-name" class="form-label">Last Name</label>
                        <input type="text" id="last-name" class="form-control" v-model="newUser.last_name" />
                    </div>
                    <div class="row">
                        <label for="registration-emai" class="form-label">Email Address</label>
                        <input type="text" id="registration-email" class="form-control" v-model="newUser.email" />
                    </div>
                    <div class="row border-top">
                        <label for="registration-password" class="form-label">Password</label>
                        <input type="password" id="registration-password" class="form-control" v-model="newUser.email" />
                    </div>
                    <div class="row border-top">
                        <label for="repeat-password" class="form-label">Repeat Password</label>
                        <input type="password" id="repeat-password" class="form-control" />
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" @click="saveUser">Sign Up</button>
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
        return {
            newUser: {
                first_name: "",
                last_name: "",
                email: "",
                password: "",
            }
        };
    },
    computed: {},
    methods: {
        saveUser: async function() {
            try {
                await this.$store.dispatch("auth/addUser", {
                    user: this.newUser,
                });
            } catch (e) {
                console.log(e)
            }
        }
    },
    mounted: async function() {},
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.modal-footer, .modal-header {
  justify-content: center;
}
</style>
