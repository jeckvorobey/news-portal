<template>
  <section class="w-1/2 mt-5 min-h-screen mx-auto bg-white">
    <AddNewsForm />
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
