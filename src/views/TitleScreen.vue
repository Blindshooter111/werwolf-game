<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>TitleScreen</ion-title>

        </ion-toolbar>
      </ion-header>
  
      <ion-content class="ion-padding">
        <ion-toolbar>
        <ion-button router-link="/lobbyoptions" >Start</ion-button>

        <ion-button >Info</ion-button>
      </ion-toolbar>
      </ion-content>
  
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { IonPage, IonButton, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
  </script>
  