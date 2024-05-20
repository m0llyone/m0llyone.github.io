import axios from 'axios';
import { CLIENTURL } from '../data/constants';

export const BASE_URL = `${CLIENTURL}/api`;

const $api = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

export default $api;
