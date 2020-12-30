<template>
    <navigation-bar></navigation-bar>
    <div class="content-container">
        <router-view v-slot="slotProps">
            <transition name="route" mode="out-in">
                <component :is="slotProps.Component"></component>
            </transition>
        </router-view>
    </div>
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
.content-container {
    margin: 3rem;
    padding: 1rem;
}
</style>
