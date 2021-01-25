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
@import "public/styles.scss";
.content-container {
    margin: 84px;
}
.row {
    padding: 12px 24px;
}
</style>
