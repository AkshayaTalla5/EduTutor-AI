import React from 'react';
import { useAuthStore } from '../store/authStore';
import { Navigate } from 'react-router-dom';

export function AdminPage() {
  const { user } = useAuthStore();

  if (user?.role !== 'teacher') {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
        <p className="text-gray-600 mt-1">Manage content and monitor student progress</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Content Management</h3>
          <p className="text-gray-600 mb-4">Create and manage lessons, quizzes, and learning materials</p>
          <button className="w-full bg-primary-500 text-white py-2 px-4 rounded-md hover:bg-primary-600 transition-colors">
            Manage Content
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Student Analytics</h3>
          <p className="text-gray-600 mb-4">View detailed analytics and progress reports</p>
          <button className="w-full bg-secondary-500 text-white py-2 px-4 rounded-md hover:bg-secondary-600 transition-colors">
            View Analytics
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Configuration</h3>
          <p className="text-gray-600 mb-4">Configure AI settings and learning parameters</p>
          <button className="w-full bg-accent-500 text-white py-2 px-4 rounded-md hover:bg-accent-600 transition-colors">
            Configure AI
          </button>
        </div>
      </div>
    </div>
  );
}