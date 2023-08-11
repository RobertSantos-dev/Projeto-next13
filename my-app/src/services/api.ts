import axios from 'axios';
import { ComponentState } from 'react';

// --- Config Axios ---

const api = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
  headers: {
    "Content-Type": "application/json"
  }
});


// --- APIs CHARACTERS e CHARACTERS ID ---

export const listAll = async () => {
  const { data } = await api.get('/character');

  return data.results;
}

export const listId = async (setId: ComponentState, id: string) => {
  const { data } = await api.get(`/character/${id}`);

  setId(data);
}


// --- APIs LOCATIONS ---

export const listAllLocations = async () => {
  const { data } = await api.get('/location');

  // setList(data.results);
  return data.results;
}

export const listIdLocations = async (setId: ComponentState, id: string) => {
  const { data } = await api.get(`/location/${id}`);

  setId(data.results);
}