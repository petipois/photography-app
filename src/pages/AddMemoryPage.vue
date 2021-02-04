<template>
  <base-layout pageTitle="Add a Memory" page-default-back-link="/memories">
  <create-memory-form @save-memory=saveMemory></create-memory-form>
  </base-layout>
</template>

<script>
import CreateMemoryForm from '../components/memories/CreateMemoryForm'
export default{
  components:{
    CreateMemoryForm
  },
  methods:{
    saveMemory(memoryData)
    {
      this.$store.dispatch('addMemory', memoryData);

    }
  }
}
</script>
