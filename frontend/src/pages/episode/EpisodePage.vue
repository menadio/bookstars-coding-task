<template>
  <div>
    <the-sub-heading title="Episodes"></the-sub-heading>

    <div
      v-if="episodes.episodesLoading"
      class="py-4 border border-2 shadow-lg bg-orange-50 text-center"
    >
      <span class="tracking-wider text-xl">Loading...</span>
    </div>

    <div
      v-else-if="!episodes.episodesLoading && episodes.episodesList.length > 0"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      <div v-for="episode in episodes.episodesList" :key="episode.id">
        <episode-item
          :episodeId="episode.id"
          :name="episode.name"
          :code="episode.episodeCode"
          :dateReleased="episode.releaseDate"
          :comments="episode.noOfComments"
        ></episode-item>
      </div>
    </div>

    <div v-else>error..</div>
  </div>
</template>

<script setup>
import { useEpisode } from "../../stores/episode";
import TheSubHeading from "../../components/TheSubHeading.vue";
import EpisodeItem from "../../components/EpisodeItem.vue";
import { onMounted } from "vue";

const episodes = useEpisode();

onMounted(() => {
  episodes.getEpisodes();
});
</script>