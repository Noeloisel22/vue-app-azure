<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import { useFavoriteStore } from '../stores/pokemonFavorites'
import PokemonCard from '../components/PokemonCard.vue'

const router = useRouter()
const favoriteStore = useFavoriteStore()
const pokemons = ref([])
const search = ref('')
const onlyFavorites = ref(false)

const fetchPokemons = async () => {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20')
    const results = response.data.results
    const detailedResponses = await Promise.all(results.map(p => axios.get(p.url)))
    
    pokemons.value = detailedResponses.map(res => ({
      id: res.data.id,
      name: res.data.name.charAt(0).toUpperCase() + res.data.name.slice(1),
      type: res.data.types[0].type.name,
      image: res.data.sprites.front_default
    }))
  } catch (error) {
    console.error("Erreur API:", error)
  }
}

const filteredList = computed(() => {
  let list = pokemons.value.filter(p => p.name.toLowerCase().includes(search.value.toLowerCase()))
  if (onlyFavorites.value) {
    list = list.filter(p => favoriteStore.isFavorite(p.id))
  }
  return list
})

const goToDetail = (id) => {
  router.push({ name: 'pokemon-detail', params: { id } }) 
}

onMounted(fetchPokemons) 
</script>

<template>
  <div class="container">
    <input v-model="search" placeholder="Rechercher..." />
    <label>
      <input type="checkbox" v-model="onlyFavorites" /> Favoris
    </label>

    <div class="grid">
      <PokemonCard 
        v-for="p in filteredList" 
        :key="p.id" 
        :pokemon="p"
        @click="goToDetail(p.id)" 
      >
        <button @click.stop="favoriteStore.toggleFavorite(p.id)"> 
          {{ favoriteStore.isFavorite(p.id) ? '❤️' : '🤍' }}
        </button>
      </PokemonCard>
    </div>
  </div>
</template>