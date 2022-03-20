<template>
  <div class="grid grid-cols-1 gap-4">
    <model-item name="Episodes" pageLink="episodes" bgColor="bg-orange-50"></model-item>
    <model-item name="Locations" pageLink="locations" bgColor="bg-blue-50"></model-item>
    <model-item name="Characters" pageLink="characters" bgColor="bg-fuchsia-50"></model-item>
  </div>
</template>

<script>
import ModelItem from "../components/ModelItem.vue"

export default {
    components: {
        ModelItem
    }
};
</script>