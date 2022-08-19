<template>
  <header class="items-center h-auto">
    <div class="flex justify-center">
      <button v-if="isAuth" @click="toAddNews">Добавить новость!</button>
      <p v-else class="text-xl text-amber-600 font-font-semibold">
        Что бы добавить | редактировать | удалить новость необходимо
        <router-link class="underline italic text-cyan-600" to="/auth">
          авторизоваться
        </router-link>
      </p>
    </div>
    <nav class="p-2 flex justify-between">
      <router-link class="text-right underline" :to="{ name: 'home' }">
        Главная
      </router-link>
      <div v-if="isAuth">
        <span>
          Вы авторизовались под пользователем:
          <strong>{{ username }}</strong>
        </span>
        <button
          class="w-content bg-yellow-500 text-white px-2 mx-5 items-center justify-center border rounded-md hover:bg-yellow-700"
          type="button"
          @click="logout"
        >
          Выход
        </button>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "AppHeader",
  setup() {
    const store = useStore();
    const router = useRouter();

    const isAuth = computed((): boolean => {
      return store.getters["userInfo/getIsAuthorized"];
    });

    const logout = () => {
      store.commit("userInfo/LOGOUT");
    };

    const username = computed(() => {
      return store.getters["userInfo/getInfoUser"].username;
    });

    const toAddNews = (): void => {
      router.push("/addnews");
    };

    return {
      username,
      isAuth,
      logout,
      toAddNews,
    };
  },
});
</script>
