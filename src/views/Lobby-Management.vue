<template>
  <div>
    <h1>Lobby Management</h1>
    <input v-model="lobbyId" placeholder="Lobby ID" />
    <button @click="createLobby">Lobby erstellen</button>
    <button @click="joinLobby">Lobby beitreten</button>
    <button @click="startGame">Spiel starten</button>

    <p>{{ serverMessage }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      socket: null,
      lobbyId: "",
      serverMessage: ""
    };
  },
  mounted() {
    this.socket = new WebSocket("ws://localhost:8080/echo");
    this.socket.onopen = () => {
        console.log("WebSocket connection opened."); // Log connection status
    };
    this.socket.onmessage = (event) => {
        this.serverMessage = event.data;
    };
  },
  methods: {
    createLobby() {
        if (this.lobbyId) {
            this.socket.send("CREATE_LOBBY " + this.lobbyId);
        } else {
            this.serverMessage = "Lobby ID cannot be empty.";
        }
    },
    joinLobby() {
        if (this.lobbyId) {
            this.socket.send("JOIN_LOBBY " + this.lobbyId);
        } else {
            this.serverMessage = "Lobby ID cannot be empty.";
        }
    },
    startGame() {
        if (this.lobbyId) {
            this.socket.send("START_GAME " + this.lobbyId);
        } else {
            this.serverMessage = "Lobby ID cannot be empty.";
        }
    }
}

};
</script>

  