import axios from 'axios';
import { SERVER_URL } from '../data/constants';

export const BASE_URL = `${SERVER_URL}/api`;

const $api = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

export default $api;
