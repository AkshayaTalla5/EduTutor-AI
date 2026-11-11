/**
 * Mock authentication system using localStorage.
 * This allows the app to run fully offline without a Supabase backend.
 */

import { User } from '../types';

const USERS_KEY = 'edututor_users';
const SESSION_KEY = 'edututor_session';

interface StoredUser {
  id: string;
  email: string;
  password: string; // plain text for demo only — never do this in production
  full_name: string;
  role: 'student' | 'teacher';
  avatar_url?: string;
  created_at: string;
  updated_at: string;
}

function getUsers(): StoredUser[] {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
  } catch {
    return [];
  }
}

function saveUsers(users: StoredUser[]) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function getSession(): User | null {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function saveSession(user: User | null) {
  if (user) {
    localStorage.setItem(SESSION_KEY, JSON.stringify(user));
  } else {
    localStorage.removeItem(SESSION_KEY);
  }
}

export const mockAuth = {
  signUp: async (
    email: string,
    password: string,
    fullName: string,
    role: 'student' | 'teacher'
  ): Promise<{ user: User | null; error: Error | null }> => {
    await delay(600);
    const users = getUsers();

    if (users.find((u) => u.email.toLowerCase() === email.toLowerCase())) {
      return { user: null, error: new Error('An account with this email already exists.') };
    }

    const now = new Date().toISOString();
    const newUser: StoredUser = {
      id: crypto.randomUUID(),
      email,
      password,
      full_name: fullName,
      role,
      created_at: now,
      updated_at: now,
    };

    users.push(newUser);
    saveUsers(users);

    const user: User = {
      id: newUser.id,
      email: newUser.email,
      full_name: newUser.full_name,
      role: newUser.role,
      created_at: newUser.created_at,
      updated_at: newUser.updated_at,
    };

    saveSession(user);
    return { user, error: null };
  },

  signIn: async (
    email: string,
    password: string
  ): Promise<{ user: User | null; error: Error | null }> => {
    await delay(600);
    const users = getUsers();
    const found = users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );

    if (!found) {
      return { user: null, error: new Error('Invalid email or password.') };
    }

    const user: User = {
      id: found.id,
      email: found.email,
      full_name: found.full_name,
      role: found.role,
      avatar_url: found.avatar_url,
      created_at: found.created_at,
      updated_at: found.updated_at,
    };

    saveSession(user);
    return { user, error: null };
  },

  signOut: async (): Promise<{ error: Error | null }> => {
    await delay(300);
    saveSession(null);
    return { error: null };
  },

  getCurrentUser: async (): Promise<User | null> => {
    await delay(100);
    return getSession();
  },
};

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
