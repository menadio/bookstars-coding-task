<template>
  <header>
    <div class="mb-8 py-8 bg-stone-800 text-stone-300 text-center">
      <h1 class="font-bold text-3xl tracking-wider">{{ title }}</h1>
    </div>
  </header>
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