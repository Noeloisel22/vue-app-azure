import axios from 'axios';


export const localApi = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 5000
});

export const pokeApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
  timeout: 5000
});