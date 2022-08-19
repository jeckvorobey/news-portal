import { ActionTree } from "vuex";
import { RootState } from "@/store/types";
import { InfoUser } from "@/store/users/types";
import { useUser } from "@/use/users";

export const actions: ActionTree<InfoUser, RootState> = {
  async login({ commit }, payload) {
    const data = await useUser(payload);
    commit("SET_USER", data.user.value);
  },
  logout({ commit }) {
    commit("LOGOUT");
  },
};
