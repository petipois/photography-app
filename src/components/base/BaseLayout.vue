<template>
<ion-page>
<ion-header>
<ion-toolbar>
<ion-buttons slot="start">
<ion-back-button :default-href="pageDefaultBackLink"></ion-back-button>

</ion-buttons>
<ion-title><h2>{{pageTitle}}</h2></ion-title>
<ion-buttons slot="end">
<slot name="actions-end"></slot>
</ion-buttons>
</ion-toolbar>
</ion-header>

<ion-content>
<slot/>
</ion-content>
 </ion-page>

</template>

<script>

import {
    IonPage, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    IonContent, IonBackButton,IonButtons} from '@ionic/vue';
export default {
    props:['pageTitle','pageDefaultBackLink'],
    components:{
        IonPage,
        IonHeader,
        IonTitle,
        IonToolbar,
        IonContent,
        IonBackButton,
        IonButtons
    }
}
</script>