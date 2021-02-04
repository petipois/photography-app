import { createStore } from "vuex";

const store = createStore({
  state: {
    memories: [],
  },
  mutations: {
    addMemory(state, memoryData) {
      const newMemory = {
        id: new Date().toISOString(),
        title: memoryData.title,
        image: memoryData.image,
        description: memoryData.description,
      };
      state.memories.push(newMemory);
      localStorage.setItem("memories", JSON.stringify(state.memories));
      console.log("UPDATING storage...");
    },
    removeMemory(state, id) {
        let filtered = state.memories.filter(mem=>mem.id != id);
        localStorage.setItem("memories", JSON.stringify(filtered));
        state.memories = filtered;
    },
  },
  actions: {
    addMemory(context, memoryData) {
      context.commit("addMemory", memoryData);
    },
    removeMemory({ commit }, payload) {
      commit("removeMemory", payload);
    },
  },
  getters: {
    memories(state) {
      if (localStorage.getItem("memories")) {
        state.memories = JSON.parse(localStorage.getItem("memories"));
        console.log("Getting items..");
      } else {
        localStorage.setItem("memories", JSON.stringify(state.memories));
        console.log("Creating storage...");
      }
      return state.memories;
    },
    memory(state) {
      return (memoryID) => {
        return state.memories.find((memory) => memory.id === memoryID);
      };
    },
  },
});
export default store;
