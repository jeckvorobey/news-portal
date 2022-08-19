import { GetterTree } from "vuex";
import { News, NewsState } from "@/store/news/types";
import { RootState } from "@/store/types";
import { useRoute } from "vue-router";

export const getters: GetterTree<NewsState, RootState> = {
  getNews(state): News[] {
    return state.news;
  },
  getCount(state): number | undefined {
    return state.count;
  },
  getOneNews(state) {
    const route = useRoute();
    return state.news.filter((item) => (item._id = route.params.id));
  },
};
