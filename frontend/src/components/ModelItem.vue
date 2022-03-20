<template>
  <base-card>
    <div class="py-16 text-center" :class="bgColor">
      <h2 class="text-lg cursor-pointer hover:font-medium tracking-wider">
        <router-link :to="pageLink">{{ name }}</router-link>
      </h2>
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
    pageLink: {
      type: String,
      required: true,
    },
    bgColor: {
      type: String,
      required: false
    }
  },
  methods: {
    goToPage() {
      alert("We will send you to another page");
    },
  },
};
</script>