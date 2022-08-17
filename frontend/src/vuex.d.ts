import { Store } from "vuex";
import { State } from "@headlessui/vue/dist/internal/open-closed";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}

// declare module "vuex" {
//   export function useStore(key?: string): Store<State>;
// }
