<template>
    <navigation-bar></navigation-bar>
    <div class="content-container">
        <router-view v-slot="slotProps">
            <transition name="route" mode="out-in">
                <component :is="slotProps.Component"></component>
            </transition>
        </router-view>
    </div>
    <div aria-live="polite" aria-atomic="true" class="d-flex align-items-center">
        <div class="toast-container position-fixed top-0 end-0 p-3">
            <template v-for="(toast, index) in notifications" :key="index">
                <notification
                    :notificationType="toast.notificationType"
                    :notificationMessage="toast.notificationMessage"
                ></notification>
            </template>
        </div>
    </div>
</template>

<script>
import NavigationBar from "./client/components/layout/NavigationBar.vue";
import Notification from "./client/components/layout/Notification.vue";

export default {
    name: "App",
    components: {
        NavigationBar,
        Notification,
    },
    data() {
        return {};
    },
    computed: {
        notifications: function() {
            return this.$store.getters["getNotifications"];
        },
    },
};
</script>

<style lang="scss" rel="stylesheet/scss">
@import "~bootstrap/dist/css/bootstrap.css";
@import "public/styles.scss";
.content-container {
    height: 100%;
    margin-top: 84px;
}
.row {
    padding: 12px 24px;
}
.toast-container {
    margin-top: 64px;
    z-index: 999;
}
</style>
