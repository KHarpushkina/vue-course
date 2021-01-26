<template>
    <nav class="navbar fixed-top navbar-dark bg-dark">
        <div class="container">
            <div>
                <a class="navbar-brand" href="#">Articles</a>
            </div>
            <div>
                <ul class="navbar-nav nav-list-links">
                    <li class="nav-item">
                        <router-link :to="{ name: 'articles_main_page' }">
                            <span class="nav-link active" aria-current="page">
                                Home
                            </span>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'create_article' }">
                            <span class="nav-link" aria-current="page">
                                Create article
                            </span>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link 2</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link 3</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link 4</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="container right-align-items">
            <div>
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            </div>
            <div class="nav-buttons">
                <button class="btn btn-light">Search</button>
                <button class="btn btn-outline-info" @click="toggleLoginModal(true)" v-if="!user.id">
                    Sign In
                </button>
                <button class="btn btn-outline-info" @click="toggleConfirmationModal(true)" v-if="user.id">
                    Sign Out
                </button>
                <button class="btn btn-outline-info" @click="toggleRegistrationModal(true)" v-if="!user.id">
                    Sign Up
                </button>
            </div>
        </div>
    </nav>
    <registration-modal ref="registration-modal" @onToggle="toggleRegistrationModal"></registration-modal>
    <login-modal ref="login-modal" @onToggle="toggleLoginModal"></login-modal>
    <confirmation-modal ref="confirmation-modal" @onToggle="toggleConfirmationModal" @onSubmitAction="signOut">
        <template v-slot:header>
            <span class="modal-title">Sign Out</span>
        </template>
        <template v-slot:body>
            <span>Are you sure you want to sign out?</span>
        </template>
    </confirmation-modal>
</template>

<script>
import RegistrationModal from "../../components/login/RegistrationModal.vue";
import LoginModal from "../../components/login/LoginModal.vue";
import ConfirmationModal from "../layout/ConfirmationModal.vue";
const bootstrap = require("bootstrap");

export default {
    name: "ArticlesList",
    components: {
        RegistrationModal,
        LoginModal,
        ConfirmationModal
    },
    data() {
        return {
            loginModalElement: null,
            registrationModalElement: null,
            confirmationModalElement: null
        };
    },
    computed: {
        user: function() {
            return this.$store.getters["auth/getUser"];
        },
    },
    methods: {
        toggleLoginModal: function(show) {
            if (show) {
                this.loginModalElement.show();
            } else {
                this.loginModalElement.hide();
            }
        },

        toggleRegistrationModal: function(show) {
            if (show) {
                this.registrationModalElement.show();
            } else {
                this.registrationModalElement.hide();
            }
        },

        toggleConfirmationModal: function(show) {
            if (show) {
                this.registrationModalElement.show();
            } else {
                this.registrationModalElement.hide();
            }
        },

        signOut: async function() {
            try {
                await this.$store.dispatch("auth/logOutUser");
                this.toggleConfirmationModal(false);
            } catch (e) {
                console.log(e);
            }
        },
    },
    mounted: function() {
        this.loginModalElement = new bootstrap.Modal(this.$refs["login-modal"].$el);
        this.registrationModalElement = new bootstrap.Modal(this.$refs["registration-modal"].$el);
        this.confirmationModalElement = new bootstrap.Modal(this.$refs["confirmation-modal"].$el);
    },
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.navbar {
    display: flex;
    flex-direction: row;
    .container {
        justify-content: start;
        margin-right: 0;
        margin-left: 0;
        width: 50%;
        div {
            display: inline;
        }
        .navbar-nav {
            flex-direction: row;
            li {
                margin: 0 10px;
                a {
                    text-decoration: none;
                }
            }
        }
        .form-control {
            width: auto;
        }
    }
    .right-align-items {
        justify-content: flex-end;
        .nav-buttons button {
            margin: 0 5px;
        }
    }
}
</style>
