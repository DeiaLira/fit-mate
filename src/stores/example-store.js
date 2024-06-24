import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    alert: false,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },
  },
});
