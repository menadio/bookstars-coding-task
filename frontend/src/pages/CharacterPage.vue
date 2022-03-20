<template>
  <div>
    <the-sub-heading title="Characters List"></the-sub-heading>

    <div class="mb-4 grid grid-cols-3 gap-4">
      <div class="">
        <label for="sort" class="block">Sort By</label>
        <select
          @change="handleSorting"
          name="sort"
          id="sort"
          class="block border border-2 w-full"
        >
          <option value="">-</option>
          <option value="first_name">First Name</option>
          <option value="last_name">Last Name</option>
          <option value="gender">Gender</option>
        </select>
      </div>

      <div class="">
        <label for="sort" class="block">Order By</label>
        <select
          @change="handleOrdering"
          name="order"
          id="order"
          class="block border border-2 w-full"
        >
          <option value="">-</option>
          <option value="asc">A to Z</option>
          <option value="desc">Z to A</option>
        </select>
      </div>

      <div class="">
        <label for="sort" class="block">Filter By</label>
        <select
          @change="handleFiltering"
          name="filter"
          id="filter"
          class="block border border-2 w-full"
        >
          <option value="">-</option>
          <optgroup label="Gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </optgroup>
          <optgroup label="Status">
            <option value="active">Active</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </optgroup>
          <template v-if="location.locationsList.length > 0">
            <optgroup label="Location">
              <option v-for="location in location.locationsList" :key="location.id"  :value="location.name" class="uppercase">{{ location.name }}</option>
            </optgroup>
          </template>
        </select>
      </div>
    </div>

    <div
      v-if="character.loading"
      class="py-4 border border-2 shadow-lg bg-blue-50 text-center"
    >
      <span class="tracking-wider text-xl">Loading...</span>
    </div>

    <div
      v-else-if="!character.loading"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      <div v-for="item in character.charactersList" :key="item.id">
        <character-item
          :firstname="item.firstName"
          :lastname="item.lastName"
          :status="item.status"
          :state="item.stateofOrigin"
          :gender="item.gender"
          :locationName="item.location.name"
          :latitude="item.location.latitude"
          :longitude="item.location.longitude"
        ></character-item>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import TheSubHeading from "../components/TheSubHeading.vue";
import CharacterItem from "../components/CharacterItem.vue";
import { useCharacter } from "@/stores/character";
import { useLocation } from "@/stores/location";

const character = useCharacter();
const location = useLocation();

onMounted(() => {
  character.getCharacters();
  location.getLocations();
});

function handleSorting(e) {
  character.sortBy = e.target.value;
  character.getCharacters();
}

function handleOrdering(e) {
  character.orderBy = e.target.value;
  character.getCharacters();
}

function handleFiltering(e) {
  character.filterBy = e.target.value.toLowerCase();
  character.getCharacters();
}
</script>