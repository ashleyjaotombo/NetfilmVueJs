<template>
  <ul class="flex w-screen overflow-x-auto gap-2 py-6 mb-8">
    <li v-for="(movie, index) in movies" :key="index">
      <MovieCard :movie="movie" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { MovieType } from "@/typescript/Movie";
import data from "../data/Movies.json";
import MovieCard from "./MovieCard.vue";

const props = defineProps<{ movies: MovieType[] }>();
</script>
