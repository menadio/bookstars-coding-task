<template>
  <div class="font-sans">
    <the-heading title="Bookstars Coding Task"></the-heading>

    <main class="mx-4 md:mx-20 mb-10 font-sans">
      <!-- <component :is="currentView" /> -->
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import TheHeading from "./components/TheHeading.vue";


</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
