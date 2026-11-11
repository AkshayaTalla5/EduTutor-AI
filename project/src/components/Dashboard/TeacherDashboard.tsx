import React from 'react';
import { Link } from 'react-router-dom';
import { Users, BookOpen, TrendingUp, Award, Plus, BarChart3 } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

// Mock data for charts
const studentProgressData = [
  { date: '2024-01-01', students: 45 },
  { date: '2024-01-02', students: 52 },
  { date: '2024-01-03', students: 48 },
  { date: '2024-01-04', students: 61 },
  { date: '2024-01-05', students: 55 },
  { date: '2024-01-06', students: 67 },
  { date: '2024-01-07', students: 72 },
];

const subjectEngagementData = [
  { subject: 'Math', students: 85 },
  { subject: 'Science', students: 78 },
  { subject: 'History', students: 92 },
  { subject: 'English', students: 88 },
];

const performanceData = [
  { name: 'Excellent', value: 35, color: '#10B981' },
  { name: 'Good', value: 40, color: '#3B82F6' },
  { name: 'Average', value: 20, color: '#F59E0B' },
  { name: 'Needs Improvement', value: 5, color: '#EF4444' },
];

export function TeacherDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Teacher Dashboard</h1>
          <p className="text-gray-600 mt-1">Monitor student progress and manage content</p>
        </div>
        <Link
          to="/admin/content"
          className="mt-4 sm:mt-0 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 transition-all duration-200"
        >
          <Plus className="w-4 h-4 mr-2" />
          Create Content
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-primary-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Students</p>
              <p className="text-2xl font-bold text-gray-900">124</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-accent-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Active Lessons</p>
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
              <p className="text-sm font-medium text-gray-600">Avg Class Score</p>
              <p className="text-2xl font-bold text-gray-900">82%</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-secondary-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Engagement</p>
              <p className="text-2xl font-bold text-gray-900">94%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Active Students Over Time</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={studentProgressData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="students" stroke="#3B82F6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Subject Engagement</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={subjectEngagementData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="subject" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="students" fill="#A855F7" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Student Performance Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={performanceData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {performanceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Student Activity</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-accent-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-accent-600" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Sarah completed Math Quiz</p>
                  <p className="text-xs text-gray-500">Score: 95%</p>
                </div>
              </div>
              <span className="text-xs text-gray-500">2 min ago</span>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 text-primary-600" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">John started History lesson</p>
                  <p className="text-xs text-gray-500">Chapter 3: World War II</p>
                </div>
              </div>
              <span className="text-xs text-gray-500">5 min ago</span>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-secondary-100 rounded-full flex items-center justify-center">
                  <Award className="w-4 h-4 text-secondary-600" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Emma earned achievement</p>
                  <p className="text-xs text-gray-500">Science Explorer Badge</p>
                </div>
              </div>
              <span className="text-xs text-gray-500">10 min ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}