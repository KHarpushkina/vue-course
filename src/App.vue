<template>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
import gg from "./components/layout/NavigationBar.vue"
export default {
  name: 'App',
  components: {}
}
</script>

<style>
@import'~bootstrap/dist/css/bootstrap.css'
</style>
