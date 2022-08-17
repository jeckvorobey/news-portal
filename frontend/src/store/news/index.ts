import { Module } from "vuex";
import { NewsState } from "@/store/news/types";
import { RootState } from "@/store/types";
import { getters } from "@/store/news/getters";
import { actions } from "@/store/news/actions";
import { mutations } from "@/store/news/mutations";

export const state: NewsState = {
  count: 0,
  news: [],
};

export const news: Module<NewsState, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
