import axios from 'axios';

axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api',
  timeout: 10000, // 10초 타임아웃
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
