import axios from 'axios';
import { ComponentState } from 'react';

const api = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
  headers: {
    "Content-Type": "application/json"
  }
});

// api.interceptors.request.use(
//   (config) => {
//     config.headers.Authorization = `Bearer sometoken`;
//     return config;
//   },
//   (err) => {
//     throw new Error(err); 
//   }
// );

const listAll = async (setList: ComponentState) => {
  const { data } = await api.get('/character');

  setList(data.results);
}

const listId = async (setId: ComponentState, id: string) => {
  const { data } = await api.get(`/character/${id}`);

  setId(data);
}

export { listAll };