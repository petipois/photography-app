<template>

  <div>
    <ion-img :src="image" :alt="title"></ion-img>
    <h2 class="ion-text-center">{{ title }}</h2>
    <p class="ion-text-center">{{ description }}</p>
    <ion-button expand="block" fill="solid" @click="sendMessage(id)">
     <ion-icon slot="icon-only" :icon="trash"></ion-icon> 
    </ion-button>
  </div>
</template>

<script>
import {trash} from 'ionicons/icons';
import {IonImg,  IonButton} from "@ionic/vue";
export default {
  props: ["title", "image", "description","id"],
  component: {
    IonImg,
    
    IonButton
  },
  data()
  {
    return{
      trash,
    }
  },methods:{
    sendMessage(id)
    {
      this.$store.dispatch('removeMemory',id);      
      this.$router.replace("/memories");
    }
  }
};
</script>
