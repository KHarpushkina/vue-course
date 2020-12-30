<template>
    <navigation-bar></navigation-bar>
    <router-view v-slot="slotProps">
        <transition name="route" mode="out-in">
            <component :is="slotProps.Component"></component>
        </transition>
    </router-view>
</template>

<script>
import NavigationBar from "./client/components/layout/NavigationBar.vue";
export default {
    name: "App",
    components: {
        NavigationBar,
    },
};
</script>

<style lang="scss" rel="stylesheet/scss">
@import "~bootstrap/dist/css/bootstrap.css";
</style>
