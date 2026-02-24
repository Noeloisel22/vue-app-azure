<template>
  <div class="home">
    <h1>Bienvenue sur le Pokédex</h1>
    <p>Utilise le menu pour explorer les Pokémon ou voir ton équipe.</p>
    <router-link to="/pokemons">
      <button>Voir la liste des Pokémon</button>
    </router-link>
  </div>
</template>

<style scoped>
.home { text-align: center; margin-top: 50px; }
button { padding: 10px 20px; cursor: pointer; background-color: #42b883; color: white; border: none; border-radius: 5px; }
</style>