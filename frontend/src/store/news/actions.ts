import { ActionTree } from "vuex";
import { RootState } from "../types";
import { NewsState } from "@/store/news/types";
import { useNews } from "@/use/news";

export const actions: ActionTree<NewsState, RootState> = {
  async fetchData({ commit }) {
    const data = await useNews();
    commit("SET_NEWS", data.news.value);
  },
};
