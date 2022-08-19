<template>
  <h3 class="text-center font-bold mt-5">
    Авторизоваться | Зарегистрироваться
  </h3>
  <!--  TODO: стилизовать инпуты-->
  <form class="mt-5">
    <div class="flex flex-col justify-center">
      <div class="w-10/12 mb-3 m-auto">
        <label
          class="block text-right text-lg font-medium text-gray-700"
          for="loginInput"
        >
        </label>
        <input
          class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ring-1"
          type="text"
          name="login"
          id="loginInput"
          v-model="formData.username"
          placeholder="Логин"
        />
      </div>
      <div class="w-10/12 m-auto">
        <label
          class="block text-lg font-medium text-gray-700 text-right"
          for="passwordInput"
        ></label>
        <input
          class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ring-1"
          type="password"
          name="password"
          id="passwordInput"
          v-model="formData.password"
          placeholder="Пароль"
        />
      </div>
    </div>
    <div class="flex py-3 m-auto w-10/12 justify-end">
      <div class="mr-3">
        <button
          type="button"
          class="bg-amber-600 border border-transparent rounded-md px-3 py-3 flex items-center justify-center text-base font-medium text-white hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
          @click.prevent="auth"
        >
          Зарегистрироваться
        </button>
      </div>
      <button
        type="button"
        class="bg-sky-600 border border-transparent rounded-md px-3 py-3 flex items-center justify-center text-base font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
        @click.prevent="signIn"
      >
        Войти
      </button>
    </div>
  </form>
</template>

<script>
import { defineComponent, reactive } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "AuthForm",
  setup() {
    const formData = reactive({
      username: "",
      password: "",
    });
    const store = useStore();
    const router = useRouter();

    async function signIn() {
      await store.dispatch("userInfo/login", formData);
      if (store.getters["userInfo/getIsAuthorized"]) {
        await router.push("/");
      }
    }

    async function registration() {
      // const r = await useRegUser(data);
    }

    return {
      formData,
      registration,
      signIn,
    };
  },
});
</script>

<style scoped></style>
