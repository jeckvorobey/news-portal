<template>
  <section class="w-1/2 mt-5 min-h-screen mx-auto bg-white">
    <AuthForm />
  </section>
</template>
<script lang="ts">
import AuthForm from "@/components/AuthForm.vue";

export default {
  name: "AuthPage",
  components: {
    AuthForm,
  },
};
</script>
