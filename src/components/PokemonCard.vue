<script setup>

defineProps({
  pokemon: {
    type: Object,
    required: true
  }
})


const emit = defineEmits(['select'])


const getColorByType = (type) => {
  return "card-" + type
}
</script>

<template>
  <div 
    class="cards" 
    :class="getColorByType(pokemon.type)"
    @click="emit('select', pokemon.name)"
  >
    <img :src="pokemon.image" :alt="pokemon.name">
    <h2>{{ pokemon.name }}</h2>
    <p>{{ pokemon.type }}</p>

    <slot></slot>
    
  </div>
</template>

<style scoped>


.cards {
  border: 1px solid #ddd;
  border-radius: 20px;
  padding: 15px;
  text-align: center;
  width: 150px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  font-family: Arial, sans-serif;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer; 
  transition: transform 0.2s;
}

.cards:hover {
  transform: scale(1.05);
}

img {
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
}

.card-Electrik {
  background-color: yellow;
}

.card-Feu {
  background-color: red;
}

.card-Psy {
  background-color: pink;
}

.card-Plante {
  background-color: green;
}

.card-Spectre {
  background-color: black;
  color: white; 
}
</style>