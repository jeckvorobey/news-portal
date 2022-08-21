<template>
  <form @submit.prevent="submit">
    <div class="flex flex-col justify-center items-center px-5">
      <label for="inputTitle"></label>
      <input
        class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ring-1"
        type="text"
        name="inputTitle"
        id="inputTitle"
        placeholder="впишите заголовок"
        v-model="newsData.title"
      />
      <label class="mt-3" for="inputDesc">Текст:</label>
      <textarea
        class="mt-5 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ring-1"
        name="inputDesc"
        id="inputDesc"
        cols="30"
        rows="10"
        placeholder="опишите события новости..."
        v-model="newsData.description"
      ></textarea>
    </div>
    <div class="px-5 pt-5">
      <button
        type="submit"
        class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Сохранить
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from "vue";
import { useRoute } from "vue-router";
import { OneNews, useOneNews } from "@/use/news";
import { useStore } from "vuex";
import { News } from "@/store/news/types";

export default defineComponent({
  name: "EditNewsForm",
  setup() {
    const newsData: News = reactive({
      _id: "",
      title: "",
      description: "",
    });
    const route = useRoute();
    const store = useStore();

    const addValue = (editNews: any): void => {
      newsData.title = editNews.title;
      newsData.description = editNews.description;
      newsData._id = route.params.id;
    };

    onMounted(async () => {
      const editNews = await useOneNews(route.params.id);
      addValue(editNews.oneNews.value?.news);
    });

    const submit = async () => {
      const updNews = await store.dispatch("news/update", newsData);
      console.log(updNews.v);
    };

    return {
      newsData,
      submit,
    };
  },
});
</script>
