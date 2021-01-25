<template>
    <div
        class="modal fade"
        id="login-modal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
                <form>
                    <div class="modal-header">
                        <span class="modal-title" id="staticBackdropLabel">Login</span>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <label for="email" class="form-label">Email Address</label>
                            <input
                                type="text"
                                id="email"
                                class="form-control"
                                v-model="loginInfo.email"
                                autocomplete="on"
                            />
                        </div>
                        <div class="row border-top">
                            <label for="password" class="form-label">Password</label>
                            <input
                                type="password"
                                id="password"
                                class="form-control"
                                v-model="loginInfo.password"
                                autocomplete="off"
                            />
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" @click="login">Sign In</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "LoginModal",
    components: {},
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
        login: async function() {
            try {
                await this.$store.dispatch("auth/loginUser", {
                    user: this.loginInfo,
                });
                this.$emit("onToggle", false);
            } catch (e) {
                console.log(e);
            }
        },
    },
};
</script>

<style scoped lang="scss" rel="stylesheet/scss"></style>
