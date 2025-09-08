<template>
  <div
    className="fixed right-1/2 translate-x-1/2 w-7/12 h-[730px] top-[50%] translate-y-[-50%] bg-zinc-800 z-50 rounded-xl brightness-100"
  >
    <div class="relative">
      <iframe
        class="w-full h-[500px] rounded-xl object-cover z-0 absolute"
        :src="movie?.video_url"
        allow="autoplay"
      ></iframe>

      <v-btn
        icon="mdi-close-circle"
        class="absolute z-50 mt-2 left-[90%] p-0"
        size="large"
        color="grey"
        @click="model = !model"
      ></v-btn>
      <div class="h-[450px]"></div>
      <div class="flex gap-8 mb-4 mx-5 mt-[1500px]">
        <v-btn prependIcon="mdi-play" color="white" class="">Lecture</v-btn>
        <v-btn icon="mdi-plus" size="small" color="black"></v-btn>
      </div>
      <div class="flex my-4 mx-4 gap-6">
        <span class="border-2 border-white px-2"> {{ movie?.age }} </span>
        <span class="px-2 rounded-lg"> {{ movie?.duration }} </span>
        <span class="border-2 border-white px-2">HD</span>
      </div>
      <p class="ml-4">Date : {{ movie?.date }}</p>
      <p class="w-[500px] ml-4">{{ movie.description }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { MovieType } from "@/typescript/Movie";
const props = defineProps<{ movie: MovieType }>();
const model = defineModel<boolean>();
</script>
