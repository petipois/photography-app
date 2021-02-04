<template>
  <base-layout
    :pageTitle="loadedMemory ? loadedMemory.title : 'Loading...'"
    pageDefaultBackLink="/memories"  >
    
    <h2 v-if="!loadedMemory">Details Page</h2>
    <memory-overview v-else :title=loadedMemory.title :description=loadedMemory.description :image=loadedMemory.image :id=loadedMemory.id></memory-overview>
  </base-layout>
</template>

<script>
import MemoryOverview from "../components/memories/MemoryOverview.vue";
export default {
  components:{
MemoryOverview
  },
  data() {
    return {
      memoryId: this.$route.params.id,
    };
  },
  computed: {
    loadedMemory() {
      return this.$store.getters.memory(this.memoryId);
    },
  },
  watch: {
    $route(currentRoute) {
      this.memoryId = currentRoute.params.id;
    },
  },
};
</script>

<style></style>
