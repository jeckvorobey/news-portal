<template>
  <section class="w-1/2 mt-5 min-h-screen mx-auto bg-white">
    <div class="container min-h-screen mx-auto">
      <h1 class="text-left text-2xl p-3 scroll-auto">Все новости:</h1>
      <Suspense>
        <template #default>
          <NewsList />
        </template>
        <template #fallback>
          <p class="mt-5 text-lg text-center">Загрузка...</p>
        </template>
      </Suspense>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NewsList from "@/components/NewsList.vue";

export default defineComponent({
  name: "HomeNews",
  components: {
    NewsList,
  },
  setup() {
    return {};
  },
});
</script>
