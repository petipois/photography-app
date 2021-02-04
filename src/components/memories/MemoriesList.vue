<template>
      <ion-list>
   <memory-list-item v-for="memory in memories" :key="memory.id" :memory="memory">
   </memory-list-item>
    </ion-list>
</template>

<script>
import MemoryListItem  from './MemoryListItem.vue';
import {IonList} from '@ionic/vue';
export default {
    props:["memories"],
    components:{
   IonList,
   MemoryListItem
    }
  
}
</script>

<style>

</style>