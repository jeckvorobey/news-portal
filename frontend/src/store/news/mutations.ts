import { MutationTree } from "vuex";
import { NewsState } from "@/store/news/types";

export const mutations: MutationTree<NewsState> = {
  SET_NEWS(state, payload: NewsState): void {
    state.count = payload.count;
    state.news = payload.news;
  },
};
