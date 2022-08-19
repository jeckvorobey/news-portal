<template>
  <section class="w-1/2 mt-5 min-h-screen mx-auto bg-white">
    <h1 class="text-bold text-center text-lg py-2">Новость:</h1>
    <div>
      <AddNewsForm />
    </div>
  </section>
</template>
<script lang="ts">
import AddNewsForm from "@/components/AddNewsForm.vue";

export default {
  name: "AuthPage",
  components: {
    AddNewsForm,
  },
};
</script>
