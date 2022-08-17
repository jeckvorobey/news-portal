<template>
  <header class="items-center h-auto">
    <div class="flex justify-center">
      <p class="text-xl text-amber-600 font-font-semibold">
        Что бы добавить | редактировать | удалить новость необходимо
        <router-link class="underline italic text-cyan-600" to="/auth">
          авторизоваться
        </router-link>
      </p>
    </div>
    <nav class="p-2">
      <router-link class="text-right underline" :to="{ name: 'home' }">
        Главная
      </router-link>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppHeader",
});
</script>
