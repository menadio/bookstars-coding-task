<template>
  <div>
    <the-sub-heading title="Locations"></the-sub-heading>

    <div v-if="location.loading" class="py-4 border border-2 shadow-lg bg-blue-50 text-center">
      <span class="tracking-wider text-xl">Loading...</span>
    </div>

    <div v-else-if="!location.loading && location.locationsList.length > 0" class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div v-for="location in location.locationsList" :key="location.id">
        <location-item
          :name="location.name"
          :latitude="location.latitude"
          :longitude="location.longitude"
        ></location-item>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import TheSubHeading from "../components/TheSubHeading.vue";
import LocationItem from "../components/LocationItem.vue";
import { useLocation } from "@/stores/location";

const location = useLocation();

onMounted(() => {
  location.getLocations();
});
</script>