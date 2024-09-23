<template>
    <ion-app>
      <ion-header>
        <ion-toolbar>
          <ion-title>TitleScreen</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content class="ion-padding">
        <ion-button router-link="/lobbyoptions" >Start</ion-button>
        <ion-button >Info</ion-button>
      </ion-content>
  
      <ion-router-outlet />
    </ion-app>
  </template>
  
  <script setup lang="ts">
  import { IonApp, IonRouterOutlet, IonButton, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
  import { useRouter } from 'vue-router';
  </script>
  