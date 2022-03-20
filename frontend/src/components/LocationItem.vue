<template>
  <base-card>
    <div class="px-4 py-4 bg-blue-50 tracking-wider">
      <h2 class="font-medium">{{ name }}</h2>
      <hr class="my-2">
      <ul>
        <li>Latitude: {{ latitude }}</li>
        <li>Longitude: {{ longitude }}</li>
      </ul>
    </div>
  </base-card>
</template>

<script>
import BaseCard from "./ui/BaseCard.vue";

export default {
  components: {
    BaseCard,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    latitude: {
      type: String,
      required: true,
    },
    longitude: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
</style>