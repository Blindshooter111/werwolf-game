import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TitleScreen from '@/views/TitleScreen.vue';
import LobbyOptions from '@/views/LobbyOptions.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/titleScreen',
    name: 'titleScreen',
    component: TitleScreen
  },
  {
    path: '/lobbyoptions',
    name: 'Lobbyoptions',
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
