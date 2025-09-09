import { createMemoryHistory, createRouter } from "vue-router";

import index from "@/pages/index.vue";
import Broadcast from "@/pages/Broadcast.vue";
const routes = [
  { path: "/", component: index },
  { path: "/broadcast/:name", component: Broadcast },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
