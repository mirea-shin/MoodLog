import { api } from '../../../../axiosConfig';
import type { User } from '../types';

const login = (user: User) => api.post(`/auth/login`, { ...user });

const authService = {
  login,
};

export default authService;
