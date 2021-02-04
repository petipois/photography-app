<template>
     <form class="ion-padding" @submit.prevent="submitForm">
    <ion-list>
      <ion-item>
        <ion-label position="floating">Title</ion-label>
        <ion-input type="text" required v-model="enteredTitle"></ion-input>
      </ion-item>
      <ion-item>
      <ion-thumbnail slot="start">
      <img :src="takenImageURL" alt=""></ion-thumbnail>
      <ion-button type="button" expand="full" fill="clear" @click="takePhoto"><ion-icon :icon="camera"  slot="start" ></ion-icon> Take a photo</ion-button>
      </ion-item>
      <ion-item>
       <ion-label position="floating">Description</ion-label>
     <ion-textarea rows="5" v-model="enteredDesc"></ion-textarea>
     </ion-item>
      </ion-list>
      <ion-button type="submit" expand="full" >Add</ion-button>
      </form>
</template>

<script>
import {Plugins, CameraResultType, CameraSource} from '@capacitor/core';
const {Camera}=Plugins;
import {camera  } from "ionicons/icons";
import { IonButton, IonThumbnail, IonList, IonItem, IonLabel, IonInput, IonTextarea, IonIcon, } from "@ionic/vue";
export default {
  emits:['save-memory'],
  components: {
    IonThumbnail,
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonIcon,
    IonTextarea,
  },
  data()
  {
    return{
      enteredTitle:'',
      enteredDesc:'',
      camera,
      takenImageURL:null
    }
  },
  methods:{
    async takePhoto()
    {
      const photo = await Camera.getPhoto({
      resultType:CameraResultType.Uri,
      source: CameraSource.Camera,
      quality:60
    });
    this.takenImageURL = photo.webPath;
    },
    submitForm()
    {
      if(this.enteredTitle=="" || this.takenImageURL=="" || this.enteredDesc == "")
      {
        alert("Please all Fields");

      }else{
              const memoryData={
        title: this.enteredTitle,
        image:this.takenImageURL,
        description:this.enteredDesc
      };

      this.$emit('save-memory', memoryData);
      this.$router.replace("/memories");
      }
    }
  }
};
</script>
