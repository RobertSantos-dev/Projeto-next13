import axios from 'axios';
import {ComponentState} from 'react';

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

const listAll = async (setData: ComponentState) => {
  const { data } = await api.get('/character');

  setData(data.results);
};

export { listAll };