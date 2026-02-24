import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import PokemonListView from '../views/PokemonListView.vue';

const router = createRouter({

  history: createWebHistory(), 
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/pokemons',
      name: 'pokemon-list',
      component: PokemonListView
    },
    {
    
      path: '/pokemon/:id',
      name: 'pokemon-detail',
      component: () => import('../views/PokemonDetailView.vue')
    },
    {

      path: '/team',
      name: 'team',
      component: () => import('../views/TeamView.vue')
    }
  ]
});

export default router;