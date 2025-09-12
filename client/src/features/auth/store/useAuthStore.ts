import { create } from 'zustand';

interface AuthState {
  user: string | null;
  token: string | null;
  isLoggedIn: boolean;
  mode: 'login' | 'signUp';
}

interface AuthAction {
  login: (username: string, password: string) => boolean;
  changeAuthMode: (mode: AuthState['mode']) => void;
}

const useAuthStore = create<AuthState & AuthAction>((set) => ({
  // State
  user: null,
  token: null,
  isLoggedIn: false,
  mode: 'login',

  // Action
  login: (username, password) => {
    // TODO: 유효성 검사
    if (!username || !password) {
      return false; // 실패 시 false 반환
    }

    // TODO: 로그인 API 요청
    set({ isLoggedIn: true, user: 'testUser', token: 'fakeToken123' });

    return true; // 성공 시 true 반환
  },
  changeAuthMode: (mode) => {
    set({ mode });
  },
}));

export default useAuthStore;
