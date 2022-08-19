import { createStore } from "vuex";
import { news } from "@/store/news";
import { userInfo } from "@/store/users";

export default createStore({
  modules: {
    news,
    userInfo,
  },
});
