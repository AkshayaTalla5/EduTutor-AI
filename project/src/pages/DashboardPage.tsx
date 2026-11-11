import React from 'react';
import { useAuthStore } from '../store/authStore';
import { StudentDashboard } from '../components/Dashboard/StudentDashboard';
import { TeacherDashboard } from '../components/Dashboard/TeacherDashboard';

export function DashboardPage() {
  const { user } = useAuthStore();

  if (!user) {
    return <div>Loading...</div>;
  }

  return user.role === 'student' ? <StudentDashboard /> : <TeacherDashboard />;
}