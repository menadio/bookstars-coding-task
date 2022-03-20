<template>
  <div class="mb-4 flex justify-between">
    <h2 class="font-medium">{{ title }}</h2>
    <router-link to="/" class="text-gray-400 hover:text-gray-700">Home</router-link>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
</style>