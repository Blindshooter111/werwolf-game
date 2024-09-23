import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TitleScreen from '@/views/TitleScreen.vue';
import LobbyOptions from '@/views/LobbyOptions.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/titleScreen',
    component: TitleScreen
  },
  {
    path: '/lobbyoptions',
    name: 'LobbyOptions',
    component: LobbyOptions
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
