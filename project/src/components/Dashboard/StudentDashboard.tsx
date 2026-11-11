import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, BookOpen, TrendingUp, Award, Clock, Target } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

// Mock data for charts
const progressData = [
  { date: '2024-01-01', score: 65 },
  { date: '2024-01-02', score: 72 },
  { date: '2024-01-03', score: 78 },
  { date: '2024-01-04', score: 85 },
  { date: '2024-01-05', score: 82 },
  { date: '2024-01-06', score: 88 },
  { date: '2024-01-07', score: 92 },
];

const subjectData = [
  { subject: 'Math', score: 85 },
  { subject: 'Science', score: 78 },
  { subject: 'History', score: 92 },
  { subject: 'English', score: 88 },
];

export function StudentDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Welcome back!</h1>
          <p className="text-gray-600 mt-1">Continue your learning journey with Aivi</p>
        </div>
        <Link
          to="/chat"
          className="mt-4 sm:mt-0 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 transition-all duration-200"
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          Chat with Aivi
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-accent-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Lessons Completed</p>
              <p className="text-2xl font-bold text-gray-900">24</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
              <Target className="w-5 h-5 text-primary-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Quizzes Taken</p>
              <p className="text-2xl font-bold text-gray-900">18</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-warning-100 rounded-lg flex items-center justify-center">
              <Award className="w-5 h-5 text-warning-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Average Score</p>
              <p className="text-2xl font-bold text-gray-900">86%</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center">
              <Clock className="w-5 h-5 text-secondary-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Time Spent</p>
              <p className="text-2xl font-bold text-gray-900">42h</p>
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Progress Over Time</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={progressData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="score" stroke="#3B82F6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Subject Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={subjectData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="subject" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="score" fill="#A855F7" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-4">
          <div className="flex items-center p-3 bg-gray-50 rounded-lg">
            <div className="w-8 h-8 bg-accent-100 rounded-full flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-accent-600" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">Completed "Introduction to Algebra"</p>
              <p className="text-xs text-gray-500">2 hours ago</p>
            </div>
          </div>

          <div className="flex items-center p-3 bg-gray-50 rounded-lg">
            <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
              <Target className="w-4 h-4 text-primary-600" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">Scored 92% on "Chemistry Quiz"</p>
              <p className="text-xs text-gray-500">5 hours ago</p>
            </div>
          </div>

          <div className="flex items-center p-3 bg-gray-50 rounded-lg">
            <div className="w-8 h-8 bg-secondary-100 rounded-full flex items-center justify-center">
              <MessageCircle className="w-4 h-4 text-secondary-600" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">Had a productive chat with Aivi about Physics</p>
              <p className="text-xs text-gray-500">Yesterday</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}