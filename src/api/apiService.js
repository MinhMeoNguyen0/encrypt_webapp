import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Replace with your actual backend URL

export const encryptRequest = (text, algorithm) => {
  return axios.post(`${API_URL}/encrypt`, { text, algorithm });
};

export const decryptRequest = (text, algorithm) => {
  return axios.post(`${API_URL}/decrypt`, { text, algorithm });
};
