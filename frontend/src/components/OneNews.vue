<template>
  <div class="w-1/2 mt-5 min-h-screen mx-auto bg-white">
    <h1 class="text-center font-bold mt-5 px-3">{{ oneNews?.title }}</h1>
    <p class="px-3 mt-5">{{ oneNews?.description }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import { useOneNews } from "@/use/news";

export default defineComponent({
  name: "OneNews",
  async setup() {
    const route = useRoute();
    const oneNews = await useOneNews(route.params.id);
    return {
      oneNews: oneNews.oneNews.value?.news,
      // news: oneNews.oneNews.value?.news,
    };
  },
});
</script>
