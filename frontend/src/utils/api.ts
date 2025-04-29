import axios, { AxiosRequestConfig } from 'axios';

const apiUrl = import.meta.env.VITE_API_URL || '/api';

console.log('API URL:', apiUrl);

const config: AxiosRequestConfig = {
  baseURL: apiUrl,
  withCredentials: true
};

const headers = {
  'Content-type': 'application/json',
  'Access-Control-Allow-Credentials': true
};

config.headers = headers;

const api = axios.create(config);

export const meliUrl = {
  searchByKeywords: (keywords: string) => `${apiUrl}/search/${keywords}`,
  getItemDetail: (id: string) => `${apiUrl}/products/${id}`
};

export default api;
