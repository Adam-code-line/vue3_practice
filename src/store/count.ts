import { defineStore } from "pinia";

export const useCountStore = defineStore("count", {
  state: () => ({
    count: 0
  }),

  getters: {
    doubleCount: (state) => state.count * 2
  },
});
