<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const pokemon = ref(null);

const capture = async () => {
  try {

    await axios.post('http://localhost:3001/team', {
      name: pokemon.value.name,
      image: pokemon.value.sprites.front_default
    });
    alert('Capturé !');
  } catch (err) {
    console.error("Erreur capture", err);
  }
};

onMounted(async () => {
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params.id}`);
  pokemon.value = res.data;
});
</script>

<template>
  <div v-if="pokemon" class="detail">
    <h1>{{ pokemon.name }}</h1>
    <img :src="pokemon.sprites.other['official-artwork'].front_default" />
    <button @click="capture">Ajouter à ma team</button>
  </div>
</template>