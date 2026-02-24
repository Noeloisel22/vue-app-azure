import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFavoriteStore = defineStore('favorites', () => {
  const favorites = ref([])

  function toggleFavorite(pokemonId) {
    const index = favorites.value.indexOf(pokemonId)
    if (index > -1) {
      favorites.value.splice(index, 1) 
    } else {
      favorites.value.push(pokemonId) 
    }
  }

  function isFavorite(pokemonId) {
    return favorites.value.includes(pokemonId)
  }

  return { favorites, toggleFavorite, isFavorite }
})