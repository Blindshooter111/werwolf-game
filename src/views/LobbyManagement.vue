<template>
  <div class="lobby-management">
    <h1>Lobby Options</h1>
    <div class="input-group">
      <input v-model="lobbyId" placeholder="Lobby ID" />
      <div class="buttons">
        <button @click="createLobby">Lobby erstellen</button>
        <button @click="joinLobby">Lobby beitreten</button>
        <button @click="startGame">Spiel starten</button>
      </div>
    </div>
    <p class="server-message">{{ serverMessage }}</p>
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
      console.log("WebSocket connection opened.");
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

<style scoped>
.lobby-management {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f0f4f8;
  font-family: Arial, sans-serif;
  color: #333;
}

h1 {
  margin-bottom: 20px;
  font-size: 2em;
  color: #007bff;
}

.input-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
}

input {
  padding: 10px;
  width: 100%;
  border: 2px solid #ccc;
  border-radius: 5px;
  margin-bottom: 15px;
  font-size: 1em;
  color: white;
}

.buttons {
  display: flex;
  gap: 10px;
  justify-content: center;
  width: 100%;
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}

.server-message {
  margin-top: 20px;
  font-size: 1.2em;
  color: #dc3545;
}

@media (max-width: 600px) {
  .input-group {
    width: 90%;
  }

  button {
    width: 100%;
  }
}
</style>
