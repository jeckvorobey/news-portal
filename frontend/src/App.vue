<template>
  <AppHeader />
  <main class="bg-gray-600 min-h-screen flex items-center">
    <router-view />
  </main>
</template>
<script lang="ts">
import AppHeader from "@/components/Header.vue";

export default {
  components: {
    AppHeader,
  },
};
</script>
