import { MutationTree } from "vuex";
import { News, NewsState } from "@/store/news/types";

export const mutations: MutationTree<NewsState> = {
  SET_NEWS(state, payload: NewsState): void {
    state.count = payload.count;
    state.news = payload.news;
  },
  REMOVE_NEWS(state, id: string | string[]): void {
    state.news = state.news.filter((news) => news._id !== id);
  },
};
