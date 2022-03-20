<template>
  <base-card>
    <div class="px-4 py-6">
      <div class="mb-8  flex justify-between">
        <h2 class="font-medium">{{ firstname }} {{ lastname }}</h2>
        <p class="px-4 py-2 text-sm rounded-full bg-green-100">{{ status }}</p>
      </div>

      <div class="mb-4 flex justify-between">
          <div>
              <p class="text-sm uppercase">State Of Origin</p>
              <p>{{ state }}</p>
          </div>
          <div>
              <p class="text-sm uppercase">Gender</p>
              <p>{{ gender }}</p>
          </div>
      </div>

      <div class="border border-t-2">
          <div class="px-2 py-2 bg-indigo-900 text-white">
              <p class="font-bold text-sm">{{ locationName }}</p>
              <p class="text-sm tracking-wide">Latitude: {{ latitude }}</p>
              <p class="text-sm tracking-wide">Longitude: {{ longitude }}</p>
          </div>
      </div>
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
      firstname: {
          type: String,
          required: true
      },
      lastname: {
          type: String,
          required: true
      },
      status: {
          type: String,
          required: true
      },
      state: {
          type: String,
          required: true
      },
      gender: {
          type: String,
          required: true
      },
      locationName: {
          type: String,
          required: true
      },
      latitude: {
          type: String,
          required: true
      },
      longitude: {
          type: String,
          required: true
      },
  }
};
</script>

<style>
</style>