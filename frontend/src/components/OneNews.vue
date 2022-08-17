<template>
  <div>
    <h1 class="text-center font-bold mt-5 px-3">{{ oneNews?.title }}</h1>
    <p class="px-3 mt-5">{{ oneNews?.description }}</p>
  </div>
  <div class="mt-3 flex justify-end">
    <button
      disabled
      type="button"
      class="mr-3 w-content bg-sky-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
    >
      Редактировать
    </button>
    <button
      disabled
      type="button"
      class="mr-3 w-content bg-red-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
    >
      Удалить
    </button>
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
    };
  },
});
</script>
