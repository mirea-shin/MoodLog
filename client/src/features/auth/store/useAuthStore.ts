import { create } from 'zustand';

import { authService } from '../index';

import type { User } from '../index';
import type { AxiosError } from 'axios';

interface AuthState {
  user: string | null;
  token: string | null;
  isLoggedIn: boolean;
  mode: 'login' | 'signUp';
  error: string | null;
  loading: boolean;
}

interface AuthAction {
  login: (user: User) => void;
  changeAuthMode: (mode: AuthState['mode']) => void;
  setErrMsg: (msg: string) => void;
}

const useAuthStore = create<AuthState & AuthAction>((set) => ({
  // State
  user: null,
  token: null,
  isLoggedIn: false,
  error: null,
  loading: false,

  mode: 'login',

  // Action-api
  login: async (user) => {
    set({ error: null });
    set({ loading: true });

    try {
      const result = await authService.login(user);
      set({
        isLoggedIn: true,
        user: result.data.user_id,
        token: result.data.token,
      });
    } catch (err) {
      console.error(err);
      set({ error: 'Invalid username or password' });
    } finally {
      set({ loading: false });
    }
  },

  // Action
  setErrMsg: (msg) => set({ error: msg }),
  changeAuthMode: (mode) => set({ mode }),
}));

export default useAuthStore;
