<template>
  <form @submit.prevent="submit">
    <div class="flex flex-col justify-center items-center px-5">
      <label for="inputTitle"></label>
      <input
        class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        type="text"
        name="inputTitle"
        id="inputTitle"
        placeholder="впишите заголовок"
        v-model="newsData.title"
      />
      <label class="mt-3" for="inputDesc">Текст:</label>
      <textarea
        class="mt-5 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
import { defineComponent, markRaw, reactive, toRefs } from "vue";
import { useStore } from "vuex";
import { useAddNews } from "@/use/news";

export default defineComponent({
  name: "AddNewsForm",
  setup() {
    const newsData = reactive({
      title: "",
      description: "",
    });

    const submit = async () => {
      const addNews = await useAddNews(newsData);
      console.log(addNews);
      return {};
    };
    return {
      newsData,
      submit,
    };
  },
});
</script>
