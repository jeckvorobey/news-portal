import { GetterTree } from "vuex";
import { RootState } from "@/store/types";
import { InfoUser, IUser } from "@/store/users/types";

export const getters: GetterTree<InfoUser, RootState> = {
  getIsAuthorized(state): boolean {
    return state.isAuthorized;
  },
  getInfoUser(state): IUser | null {
    return state.user;
  },
};
