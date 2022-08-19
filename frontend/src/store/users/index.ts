import { Module } from "vuex";
import { RootState } from "@/store/types";
import { InfoUser } from "@/store/users/types";
import { getters } from "@/store/users/getters";
import { mutations } from "@/store/users/mutations";
import { actions } from "@/store/users/actions";

export const state: InfoUser = {
  isAuthorized: false,
  message: "",
  token: "",
  user: {
    _id: "",
    username: "",
  },
};

export const userInfo: Module<InfoUser, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
