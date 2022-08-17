<template>
  <AppHeader />
  <main class="bg-gray-600 min-h-screen flex items-center">
    <router-view />
  </main>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import AppHeader from "@/components/Header.vue";

export default defineComponent({
  components: {
    AppHeader,
  },
});
</script>
