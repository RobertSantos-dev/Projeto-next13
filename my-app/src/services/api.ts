import axios from 'axios';

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

const listAll = async () => {
  const { data } = await api.get('/character');

  return data;
}

export { listAll };