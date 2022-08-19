import { ActionTree } from "vuex";
import { RootState } from "../types";
import { NewsState } from "@/store/news/types";
import { useNews, useRemoveNews } from "@/use/news";
import router from "@/router";

export const actions: ActionTree<NewsState, RootState> = {
  async fetchData({ commit }) {
    const data = await useNews();
    commit("SET_NEWS", data.news.value);
  },
  async remove({ commit }, id: string) {
    commit("REMOVE_NEWS", id);
    const removeNews = await useRemoveNews(id);
    if (removeNews.news.value) {
      alert("Новость удалена");
    } else {
      return "неизвестная ошибка remove";
    }
    await router.push("/");
  },
};
