import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TitleScreen from '@/views/TitleScreen.vue';
import LobbyOptions from '@/views/Lobby-Management.vue';
import LobbyJoin from '@/views/LobbyJoin.vue';
import Lobby from '@/views/Lobby.vue';
import LobbyManagement from '@/views/Lobby-Management.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/titleScreen',
    name: 'titleScreen',
    component: TitleScreen
  },
  {
    path: '/lobbyoptions',
    name: 'Lobbyoptions',
    component: LobbyManagement
  },
  {
    path: '/lobbyjoin',
    name: 'lobbyjoin',
    component: LobbyJoin
  },
  {
    path: '/lobby',
    name: 'lobby',
    component: Lobby
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
