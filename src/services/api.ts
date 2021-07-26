import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/Hellnick/fakeAPI/produtos'
})

export default api;
