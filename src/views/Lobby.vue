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

      <div class="chat">
        <h2>Chat</h2>
        <div class="chat-messages">
          <p v-for="(msg, index) in chatMessages" :key="index">{{ msg }}</p>
        </div>
        <input v-model="chatMessage" placeholder="Enter message" @keydown.enter="sendMessage" />
      </div>
    </ion-content>
  </ion-page>
</template>
<script setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
</script>

<script>
export default {
  props: ["lobbyId", "clientId"],
  data() {
    return {
      socket: null,
      chatMessage: "",
      chatMessages: []
    };
  },
  mounted() {
    // Verbindet den Client mit dem WebSocket-Server
    this.socket = new WebSocket("ws://localhost:8080/echo");

    this.socket.onopen = () => {
      console.log("Connected to WebSocket in lobby: " + this.lobbyId);
    };

    this.socket.onmessage = (event) => {
      const message = event.data;
      
      // Wenn die Nachricht eine UUID ist, speichere sie
      if (message.startsWith("UUID")) {
        this.clientId = message.substring(5);  // UUID von der Nachricht extrahieren
        console.log("Client received UUID: " + this.clientId);
      }

      // Verarbeite Chat-Nachrichten
      if (message.startsWith("CHAT")) {
        this.chatMessages.push(message.substring(5));
      }
    };

    this.socket.onclose = () => {
      console.log("WebSocket connection closed.");
    };
  },
  methods: {
    sendMessage() {
      if (this.chatMessage) {
        // Sende die Chat-Nachricht an den WebSocket-Server
        this.socket.send("CHAT " + this.lobbyId + " " + this.chatMessage);
        this.chatMessage = "";  // Eingabefeld nach dem Senden leeren
      }
    }
  },
  beforeDestroy() {
    // WebSocket-Verbindung schließen, wenn die Komponente zerstört wird
    if (this.socket) {
      this.socket.close();
    }
  }
};

</script>