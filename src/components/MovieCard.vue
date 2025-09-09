<template>
  <div
    class="w-60 h-[420px] relative"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
  >
    <img
      v-if="!hovered"
      :src="movie.image_url"
      alt="image"
      class="object-cover w-full h-full rounded-lg"
    />
    <div
      v-else
      class="absolute h-[450px] w-80 bg-zinc-700 top-0 -translate-x-5 rounded-lg -translate-y-4 z-30"
    >
      <img :src="movie.image_url" alt="" class="w-full h-[300px] rounded-lg" />
      <div class="flex justify-between my-3 mx-3 gap-2">
        <RouterLink :to="'/broadcast/' + movie.name">
          <v-btn size="small" color="white" class="rounded-lg text-black"
            >Lecture</v-btn
          >
        </RouterLink>

        <v-btn
          size="small"
          color="grey"
          class="rounded-lg"
          @click="printDetails = true"
          >Plus d'infos</v-btn
        >
        <v-btn icon="mdi-plus" density="compact" color="grey"></v-btn>
      </div>
      <div class="flex my-4 justify-between mx-3">
        <span class="border-2 border-white px-2 rounded-lg">{{
          movie.age
        }}</span>
        <span class="border-2 border-white px-2 rounded-lg">{{
          movie.duration
        }}</span>
        <span class="border-2 border-white px-2 rounded-lg">HD</span>
      </div>
      <div class="ma-3">{{ movie.genre }}</div>
    </div>
  </div>
  <div v-if="printDetails">
    <MovieDetails :movie="movie" v-model="printDetails" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { MovieType } from "@/typescript/Movie";
import MovieDetails from "./MovieDetails.vue";

const props = defineProps<{ movie: MovieType }>();
const hovered = ref(false);
const printDetails = ref(false);
</script>
