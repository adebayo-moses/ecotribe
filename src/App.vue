<script setup>
import { RouterLink, RouterView } from 'vue-router';
import HomeView from './views/HomeView.vue';
</script>

<template>
  <HomeView></HomeView>
</template>

<style scoped>
nav a.router-link-exact-active {
  --tw-text-opacity: 1;
  color: rgb(74 222 128 / var(--tw-text-opacity));
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  margin-right: 1em;
}
</style>
