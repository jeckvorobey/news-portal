<template>
  <h3 class="text-center font-bold mt-5">
    Авторизоваться | Зарегистрироваться
  </h3>
  <!--  TODO: стилизовать инпуты-->
  <form class="mt-5">
    <div class="flex flex-col justify-center">
      <div class="columns-3 mb-3">
        <label
          class="block text-right text-lg font-medium text-gray-700"
          for="loginInput"
          >Логин:
        </label>
        <input
          class="px-1"
          type="text"
          name="login"
          id="loginInput"
          v-model="formData.username"
          placeholder="Логин"
        />
      </div>
      <div class="columns-3">
        <label
          class="block text-lg font-medium text-gray-700 text-right"
          for="passwordInput"
          >Пароль:</label
        >
        <input
          class="px-1"
          type="password"
          name="password"
          id="passwordInput"
          v-model="formData.password"
          placeholder="Пароль"
        />
      </div>
    </div>
    <div class="flex py-3 justify-end">
      <button
        type="button"
        class="mr-3 bg-amber-600 border border-transparent rounded-md px-3 py-3 flex items-center justify-center text-base font-medium text-white hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
        @click.prevent="auth"
      >
        Зарегистрироваться
      </button>
      <button
        type="button"
        class="mr-3 bg-sky-600 border border-transparent rounded-md px-3 py-3 flex items-center justify-center text-base font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
        @click.prevent="signIn"
      >
        Войти
      </button>
    </div>
  </form>
</template>

<script>
import { defineComponent, reactive } from "vue";
import { useUser, useRegUser } from "@/use/users";

export default defineComponent({
  name: "AuthForm",
  setup() {
    const formData = reactive({
      username: null,
      password: null,
    });
    // const username = ref(null);
    // const password = ref(null);

    // const data = computed(() => {
    //   return {
    //     username,
    //     password,
    //   };
    // });

    async function signIn() {
      const response = await useUser(formData);
    }

    async function auth() {
      // const r = await useRegUser(data);
    }

    // watch(data, (value, oldValue, onCleanup) => {
    //   console.log(`watch: ${value.username}`);
    // });

    return {
      formData,
      auth,
      signIn,
    };
  },
});
</script>

<style scoped></style>
