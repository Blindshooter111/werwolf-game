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
  props: ["lobbyId"],
  data() {
    return {
      socket: null,
      chatMessage: "",
      chatMessages: []
    };
  },
  mounted() {
    // Connect to the WebSocket server for chat
    this.socket = new WebSocket("ws://localhost:8080/echo");

    this.socket.onopen = () => {
      console.log("Connected to WebSocket in lobby: " + this.lobbyId);
    };

    this.socket.onmessage = (event) => {
      const message = event.data;
      if (message.startsWith("CHAT")) {
        // Append received chat message to the list
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
        // Send the chat message to the WebSocket server
        this.socket.send("CHAT " + this.lobbyId + " " + this.chatMessage);
        this.chatMessage = ""; // Clear the input after sending
      }
    }
  },
  beforeDestroy() {
    // Close the WebSocket connection when the component is destroyed
    if (this.socket) {
      this.socket.close();
    }
  }
};

</script>