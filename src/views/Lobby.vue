<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Lobby</ion-title>

        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <div class="lobby">
          <h1>Lobby</h1>
          <p>Lobby ID: {{ lobbyId }}</p>
        </div>
      </ion-content>
    </ion-page>
  </template>

<script setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
</script>

<script>
    export default {
    props: ["lobbyId"],
    mounted() {
      console.log("Lobby ID: " + this.lobbyId);
      
    }
  };
</script>