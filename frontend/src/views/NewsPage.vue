<template>
  <section class="w-1/2 mt-5 min-h-screen mx-auto bg-white">
    <suspense>
      <template #default>
        <OneNews />
      </template>
      <template #fallback>
        <p class="mt-5 text-lg text-center">Загрузка...</p>
      </template>
    </suspense>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import OneNews from "@/components/OneNews.vue";

export default defineComponent({
  name: "NewsPage",
  components: {
    OneNews,
  },
});
</script>
