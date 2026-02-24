<script setup>
const model = defineModel()
</script>

<template>
  <div class="search-container">
    <input 
      v-model="model" 
      type="text" 
      placeholder="Rechercher un Pokémon..."
    >
  </div>
</template>

<style scoped>
.search-container {
  margin-bottom: 20px;
}

input {
  padding: 10px;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
}
</style>