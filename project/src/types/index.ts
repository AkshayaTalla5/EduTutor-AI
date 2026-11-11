export interface User {
  id: string;
  email: string;
  full_name: string;
  role: 'student' | 'teacher';
  avatar_url?: string;
  created_at: string;
  updated_at: string;
}

export interface ChatMessage {
  id: string;
  user_id: string;
  content: string;
  sender: 'user' | 'aivi';
  timestamp: string;
  session_id?: string;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  questions: QuizQuestion[];
  created_by: string;
  subject: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  created_at: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correct_answer: number;
  explanation: string;
}

export interface QuizAttempt {
  id: string;
  user_id: string;
  quiz_id: string;
  score: number;
  total_questions: number;
  answers: QuizAnswer[];
  completed_at: string;
  time_taken: number;
}

export interface QuizAnswer {
  question_id: string;
  selected_answer: number;
  is_correct: boolean;
}

export interface LearningProgress {
  id: string;
  user_id: string;
  subject: string;
  level: number;
  xp_points: number;
  topics_completed: string[];
  last_activity: string;
}

export interface Analytics {
  user_id: string;
  total_quizzes: number;
  average_score: number;
  total_time_spent: number;
  subjects_studied: string[];
  progress_over_time: ProgressPoint[];
}

export interface ProgressPoint {
  date: string;
  score: number;
  subject: string;
}