<template>
  <section class="w-1/2 mt-5 min-h-screen mx-auto bg-white">
    <h1 class="text-bold text-center text-lg py-2">Редактировать новость:</h1>
    <div>
      <EditNewsForm />
    </div>
  </section>
</template>
<script lang="ts">
import EditNewsForm from "@/components/EditNewsForm.vue";

export default {
  name: "AuthPage",
  components: {
    EditNewsForm,
  },
};
</script>
