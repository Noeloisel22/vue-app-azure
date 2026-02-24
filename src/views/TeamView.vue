<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const team = ref([]);

const loadTeam = async () => {
  const res = await axios.get('http://localhost:3001/team');
  team.value = res.data;
};

const release = async (id) => {
  await axios.delete(`http://localhost:3001/team/${id}`); 
  loadTeam();
};

onMounted(loadTeam);
</script>

<template>
  <div class="team">
    <h2>Ma Team</h2>
    <div v-for="p in team" :key="p.id" class="team-item">
      {{ p.name }} <button @click="release(p.id)">Relâcher</button>
    </div>
  </div>
</template>