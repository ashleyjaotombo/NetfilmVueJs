<template>
  <div class="h-screen w-screen">
    <iframe
      :src="movie?.video_url"
      frameborder="0"
      allow="autoplay"
      class="w-full h-full"
    ></iframe>
  </div>
</template>

<script setup lang="ts">
import type { MovieType } from "@/typescript/Movie";
import { useRoute } from "vue-router";
import data from "../data/Movies.json";
const props = defineProps<{ movie: MovieType }>();
const route = useRoute();
const { name } = route.params as { name: string };

const movie = data.find((movie) => movie.name === name);

//
</script>
