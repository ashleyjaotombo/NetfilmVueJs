<template>
  <h2 class="font-bold text-2xl">Nouveaux</h2>
  <MovieSection :movies="data" />
  <h2 class="font-bold text-2xl">Action</h2>
  <MovieSection :movies="action" />
  <h2 class="font-bold text-2xl">Science-Fiction</h2>
  <MovieSection :movies="science" />
  <h2 class="font-bold text-2xl">Thriller</h2>
  <MovieSection :movies="thriller" />
  <h2 class="font-bold text-2xl">Fantastique</h2>
  <MovieSection :movies="fantastique" />
  <h2 class="font-bold text-2xl">Drame</h2>
  <MovieSection :movies="drame" />
</template>

<script lang="ts" setup>
import MovieCard from "@/components/MovieCard.vue";
import MovieSection from "@/components/MovieSection.vue";
import data from "../data/Movies.json";
const action = data.filter((movie) => movie.type === "Action");
const science = data.filter((movie) => movie.type === "Science-Fiction");
const thriller = data.filter((movie) => movie.type === "Thriller");
const fantastique = data.filter((movie) => movie.type === "Fantastique");
const drame = data.filter((movie) => movie.type === "Drame");
</script>
