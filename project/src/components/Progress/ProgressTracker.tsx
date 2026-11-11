import React from 'react';
import { TrendingUp, Award, Target, Clock, BookOpen } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

// Mock progress data
const progressData = [
  { date: '2024-01-01', score: 65, timeSpent: 2 },
  { date: '2024-01-02', score: 72, timeSpent: 3 },
  { date: '2024-01-03', score: 78, timeSpent: 2.5 },
  { date: '2024-01-04', score: 85, timeSpent: 4 },
  { date: '2024-01-05', score: 82, timeSpent: 3.5 },
  { date: '2024-01-06', score: 88, timeSpent: 3 },
  { date: '2024-01-07', score: 92, timeSpent: 2.5 },
];

const subjectProgress = [
  { subject: 'Math', progress: 85, fullMark: 100 },
  { subject: 'Science', progress: 78, fullMark: 100 },
  { subject: 'History', progress: 92, fullMark: 100 },
  { subject: 'English', progress: 88, fullMark: 100 },
  { subject: 'Literature', progress: 75, fullMark: 100 },
];

const achievements = [
  { name: 'First Quiz', description: 'Complete your first quiz', earned: true },
  { name: 'Math Master', description: 'Score 90%+ in 5 math quizzes', earned: true },
  { name: 'Science Explorer', description: 'Complete 10 science lessons', earned: true },
  { name: 'History Buff', description: 'Perfect score in history quiz', earned: false },
  { name: 'Learning Streak', description: 'Study for 7 consecutive days', earned: false },
];

export function ProgressTracker() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Your Progress</h1>
        <p className="text-gray-600 mt-1">Track your learning journey and achievements</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-accent-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Current Average</p>
              <p className="text-2xl font-bold text-gray-900">86%</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
              <Target className="w-5 h-5 text-primary-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Quizzes Completed</p>
              <p className="text-2xl font-bold text-gray-900">24</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-warning-100 rounded-lg flex items-center justify-center">
              <Award className="w-5 h-5 text-warning-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Achievements</p>
              <p className="text-2xl font-bold text-gray-900">3/5</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center">
              <Clock className="w-5 h-5 text-secondary-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Study Time</p>
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
              <Line type="monotone" dataKey="score" stroke="#3B82F6" strokeWidth={2} name="Score %" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Subject Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={subjectProgress}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={90} domain={[0, 100]} />
              <Radar name="Progress" dataKey="progress" stroke="#A855F7" fill="#A855F7" fillOpacity={0.3} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Achievements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((achievement, index) => (
            <div key={index} className={`p-4 rounded-lg border-2 ${
              achievement.earned 
                ? 'border-accent-200 bg-accent-50' 
                : 'border-gray-200 bg-gray-50'
            }`}>
              <div className="flex items-center mb-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  achievement.earned 
                    ? 'bg-accent-500 text-white' 
                    : 'bg-gray-300 text-gray-600'
                }`}>
                  <Award className="w-4 h-4" />
                </div>
                <h4 className={`ml-3 font-medium ${
                  achievement.earned ? 'text-gray-900' : 'text-gray-500'
                }`}>
                  {achievement.name}
                </h4>
              </div>
              <p className={`text-sm ${
                achievement.earned ? 'text-gray-600' : 'text-gray-500'
              }`}>
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}