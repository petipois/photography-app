<template>
<div>
   <ion-item :router-link="`/memories/${memory.id}`">
  <ion-thumbnail slot="start">
  <ion-img :src="memory.image" :alt="memory.id">
    </ion-img>
    </ion-thumbnail>
    <ion-label>
    {{memory.title}}</ion-label>
    </ion-item>
    </div>
</template>

<script>
import {IonItem, IonImg, IonLabel,IonThumbnail} from '@ionic/vue';
export default {
    props:["memory"],
    components:{
   IonItem,
   IonImg,
   IonLabel,
   IonThumbnail
    },
}
</script>

<style>

</style>