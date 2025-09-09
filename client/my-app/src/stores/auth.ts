import { create } from 'zustand'

type AuthMode = 'login' | 'registration';

interface AuthState {
    mode: AuthMode;
    toggleMode: () => void;
}

export const useAuthStore = create<AuthState>((set, get) => ({
    mode: 'registration',
    toggleMode: () => {
        const current = get().mode;
        set({
            mode: current === 'login' ? 'registration' : 'login',
        });
    },
}));