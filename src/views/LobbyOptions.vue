<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Lobby Options</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content>
        <ion-toolbar>
        <ion-button href="/lobby">Create Lobby</ion-button>
        <ion-button href="/lobbyjoin">Join Lobby</ion-button>
        <ion-button href="/">Exit Lobby</ion-button>
      </ion-toolbar>
      </ion-content>
    </ion-page>
  </template>
  <script setup lang="ts">
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
</script>
  