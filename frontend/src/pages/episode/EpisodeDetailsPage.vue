<template>
  <div>
    <the-sub-heading title="Episode Details"></the-sub-heading>

    <div
      v-if="episode.selectedEpisodeLoading"
      class="py-4 border border-2 shadow-lg bg-orange-50 text-center"
    >
      <span class="tracking-wider text-xl">Loading...</span>
    </div>

    <div
      v-else-if="!episode.selectedEpisodeLoading && episode.selectedEpisode"
      class="md:flex justify-between md:space-x-12 space-y-10"
    >
      <div class="w-full">
        <base-card :class="'mb-8'">
          <div class="px-4 py-2">
            <p class="text-sm font-bold">Title</p>
            <p class="mb-4">{{ episode.selectedEpisode.name }}</p>
            <div class="flex justify-between">

            <p class="text-sm">
              Episode {{ episode.selectedEpisode.episodeCode }}
            </p>
            <p class="text-sm">
              {{ episode.selectedEpisode.created }}
            </p>
            </div>
          </div>
        </base-card>

        <base-card v-if="episode.selectedEpisodeCharacters">
          <div class="px-4 py-2">
            <h2 class="mb-2 text-sm font-medium">The Cast</h2>
            <ul
              v-for="character in episode.selectedEpisodeCharacters"
              :key="character.id"
            >
              <li>
                {{ character.firstName }} {{ character.lastName }}
                <span class="text-sm text-zinc-400">{{
                  character.status
                }}</span>
              </li>
            </ul>
          </div>
        </base-card>
      </div>

      <div class="w-full">
        <ul
          v-for="comment in episode.selectedEpisodeComments"
          :key="comment.id"
        >
          <li class="my-2 border-b-2">
            <span class="block text-base">{{ comment.comment }}</span>
            <span class="mt-2 block text-sm text-gray-400"
              ><span class="font-medium">From:</span>
              {{ comment.ipAddressLocation }}</span
            >
          </li>
        </ul>

        <form @submit.prevent="addComment" class="mt-6">
          <label for="" class="mb-2 block">Add a Comment</label>
          <textarea
            v-model="comment"
            name="comment"
            id=""
            cols="30"
            rows="3"
            class="mb-4 px-4 py-4 border border-2 rounded-lg w-full"
          ></textarea>
          <button
            class="px-6 py-2 bg-blue-900 rounded-lg text-white text-small"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useEpisode } from "@/stores/episode";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import TheSubHeading from "../../components/TheSubHeading.vue";
import BaseCard from "../../components/ui/BaseCard.vue";

const episode = useEpisode();
const route = useRoute();
const comment = ref("");

onMounted(() => {
  episode.getEpisode(route.params.id);
});

function addComment() {
  fetch(`http://localhost:8002/api/episodes/${route.params.id}/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ comment: comment.value }),
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      if (res.success) {
        episode.getEpisode(route.params.id);
        comment.value = "";
        alert(res.message);
      }
    })
    .catch((e) => {
      console.log(e);
    });
}
</script>
