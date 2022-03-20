<template>
  <base-card>
    <div class="px-4 py-6 bg-orange-50 text-left">
      <div class="mb-4 flex justify-between">
        <div>
          <p class="text-sm font-bold">Title</p>
          <h2>{{ name }}</h2>
        </div>
        <div>
          <p class="text-sm font-bold">Code</p>
          <h3 class="mb-4">{{ code }}</h3>
        </div>
      </div>
      <p>Released On: {{ dateReleased }}</p>
      <p>Comments: {{ comments }}</p>
    </div>
    <div class="px-4 py-4 bg-zinc-500 text-white text-right tracking-wider">
      <router-link 
        :to="'/episodes/' + episodeId" 
        class="hover:text-orange-50"
      >
        View Details
      </router-link>
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
    episodeId: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    dateReleased: {
      type: String,
      required: true,
    },
    comments: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style>
</style>