<template>
  <div v-if="count">
    <div
      class="mt-5 border-2 border-sky-600 mx-3 overflow-y-clip overflow-hidden"
      v-for="item in news"
      :key="item._id"
    >
      <router-link
        class="underline"
        :to="{ name: 'news', params: { id: item._id } }"
      >
        <h3 class="p-2 text-center font-bold hover:bg-blue-300 overflow-hidden">
          {{ item.title }}
        </h3>
      </router-link>
      <p class="text-left p-3">{{ item.description }}</p>
    </div>
  </div>
  <p v-else class="text-center py-3 text-red-500">В базе нет новостей!</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import store from "@/store";

export default defineComponent({
  computed: {
    count() {
      return store.getters["news/getCount"];
    },
    news() {
      return store.getters["news/getNews"];
    },
  },
  mounted() {
    store.dispatch("news/fetchData");
  },
  name: "NewsList",
});
</script>
