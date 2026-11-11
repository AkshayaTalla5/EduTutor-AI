import { create } from 'zustand';
import { User } from '../types';
import { mockAuth } from '../lib/mockAuth';

interface AuthState {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, fullName: string, role: 'student' | 'teacher') => Promise<void>;
  signOut: () => Promise<void>;
  setUser: (user: User | null) => void;
  initialize: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: true,
  isAuthenticated: false,

  signIn: async (email: string, password: string) => {
    set({ isLoading: true });
    try {
      const { user, error } = await mockAuth.signIn(email, password);
      if (error) throw error;
      if (user) {
        set({ user, isAuthenticated: true });
      }
    } catch (error) {
      console.error('Sign in error:', error);
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  signUp: async (email: string, password: string, fullName: string, role: 'student' | 'teacher') => {
    set({ isLoading: true });
    try {
      const { user, error } = await mockAuth.signUp(email, password, fullName, role);
      if (error) throw error;
      if (user) {
        set({ user, isAuthenticated: true });
      }
    } catch (error) {
      console.error('Sign up error:', error);
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  signOut: async () => {
    try {
      const { error } = await mockAuth.signOut();
      if (error) throw error;
      set({ user: null, isAuthenticated: false });
    } catch (error) {
      console.error('Sign out error:', error);
      throw error;
    }
  },

  setUser: (user: User | null) => {
    set({ user, isAuthenticated: !!user, isLoading: false });
  },

  initialize: async () => {
    try {
      const user = await mockAuth.getCurrentUser();
      if (user) {
        set({ user, isAuthenticated: true });
      }
    } catch (error) {
      console.warn('Auth initialization skipped:', error);
    } finally {
      set({ isLoading: false });
    }
  },
}));