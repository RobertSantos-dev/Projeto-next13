import axios from 'axios';
import { ComponentState } from 'react';

// --- Config Axios ---

const api = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
  headers: {
    "Content-Type": "application/json"
  }
});


// --- APIs ---

export const listAll = async (setList: ComponentState) => {
  const { data } = await api.get('/character');

  setList(data.results);
}

export const listId = async (setId: ComponentState, id: string) => {
  const { data } = await api.get(`/character/${id}`);

  setId(data);
}
