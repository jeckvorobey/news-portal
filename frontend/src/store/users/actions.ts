import { ActionTree } from "vuex";
import { RootState } from "@/store/types";
import { InfoUser } from "@/store/users/types";
import { useRegUser, useUser } from "@/use/users";

export const actions: ActionTree<InfoUser, RootState> = {
  async login({ commit }, payload) {
    const data = await useUser(payload);
    commit("SET_USER", data.user.value);
  },
  async register({ commit }, payload) {
    const data = await useRegUser(payload);
    commit("SET_USER", data.responseUser.value);
    return data.responseUser.value;
  },
  logout({ commit }) {
    commit("LOGOUT");
  },
};
