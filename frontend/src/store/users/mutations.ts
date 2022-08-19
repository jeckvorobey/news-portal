import { MutationTree } from "vuex";
import { responseUser } from "@/use/users";

export const mutations: MutationTree<responseUser> = {
  SET_USER(state, payload: responseUser): void {
    state.isAuthorized = payload.isAuthorized;
    state.message = payload.message;
    state.token = payload.token;
    state.user = payload.user;

    localStorage.setItem("token", payload.token);
  },
  LOGOUT(state): void {
    state.isAuthorized = false;
    state.token = "";
    state.message = "";
    state.user = null;

    localStorage.clear();
  },
};
