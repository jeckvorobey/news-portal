import { createStore } from "vuex";
import { news } from "@/store/news";

export default createStore({
  modules: {
    news,
  },
});
