import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TitleScreen from '@/views/TitleScreen.vue';
import LobbyJoin from '@/views/LobbyJoin.vue';
import Lobby from '@/views/Lobby.vue';
import LobbyManagement from '@/views/LobbyManagement.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/titleScreen',
    name: 'titleScreen',
    component: TitleScreen
  },
  {
    path: '/lobbymanagement',
    name: 'LobbyManagement',
    component: LobbyManagement
  },
  {
    path: '/lobbyjoin',
    name: 'lobbyjoin',
    component: LobbyJoin
  },
  {
    path: "/lobby:lobbyId",
    name: "LobbyView",
    component: Lobby,
    props: true
  },
  {
    path: '/',
    redirect: '/titleScreen'
  }

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
