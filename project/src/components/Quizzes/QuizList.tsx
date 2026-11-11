import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Target, TrendingUp, PlayCircle } from 'lucide-react';

// Mock quiz data
const quizzes = [
  {
    id: '1',
    title: 'Introduction to Algebra',
    description: 'Test your understanding of basic algebraic concepts',
    questions: 10,
    difficulty: 'beginner',
    subject: 'Math',
    estimatedTime: 15,
    averageScore: 85,
  },
  {
    id: '2',
    title: 'Chemical Reactions',
    description: 'Explore the fundamentals of chemical reactions',
    questions: 15,
    difficulty: 'intermediate',
    subject: 'Science',
    estimatedTime: 20,
    averageScore: 78,
  },
  {
    id: '3',
    title: 'World War II',
    description: 'Historical events and significance of WWII',
    questions: 12,
    difficulty: 'intermediate',
    subject: 'History',
    estimatedTime: 18,
    averageScore: 82,
  },
  {
    id: '4',
    title: 'English Literature',
    description: 'Classic authors and literary techniques',
    questions: 8,
    difficulty: 'advanced',
    subject: 'English',
    estimatedTime: 12,
    averageScore: 75,
  },
];

const difficultyColors = {
  beginner: 'bg-accent-100 text-accent-800',
  intermediate: 'bg-warning-100 text-warning-800',
  advanced: 'bg-error-100 text-error-800',
};

export function QuizList() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Quizzes</h1>
          <p className="text-gray-600 mt-1">Test your knowledge and track your progress</p>
        </div>
        <button className="mt-4 sm:mt-0 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 transition-all duration-200">
          Generate AI Quiz
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quizzes.map((quiz) => (
          <div key={quiz.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{quiz.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{quiz.description}</p>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${difficultyColors[quiz.difficulty as keyof typeof difficultyColors]}`}>
                  {quiz.difficulty}
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
              <div className="flex items-center">
                <Target className="w-4 h-4 mr-1" />
                {quiz.questions} questions
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {quiz.estimatedTime} min
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-4 h-4 mr-1" />
                {quiz.averageScore}% avg
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-900">{quiz.subject}</span>
              <Link
                to={`/quizzes/${quiz.id}`}
                className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-primary-600 bg-primary-50 hover:bg-primary-100 transition-colors"
              >
                <PlayCircle className="w-4 h-4 mr-1" />
                Start Quiz
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}