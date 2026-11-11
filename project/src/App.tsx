import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useAuthStore } from './store/authStore';
import { Layout } from './components/Layout/Layout';
import { LoginForm } from './components/Auth/LoginForm';
import { RegisterForm } from './components/Auth/RegisterForm';
import { DashboardPage } from './pages/DashboardPage';
import { ChatPage } from './pages/ChatPage';
import { QuizzesPage } from './pages/QuizzesPage';
import { ProgressPage } from './pages/ProgressPage';
import { AdminPage } from './pages/AdminPage';

function App() {
  const { isAuthenticated, isLoading, initialize } = useAuthStore();

  useEffect(() => {
    initialize();
  }, [initialize]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  return (
    <Router>
      <div className="App">
        <Toaster position="top-right" />
        <Routes>
          <Route path="/login" element={
            isAuthenticated ? <Navigate to="/dashboard" /> : <LoginForm />
          } />
          <Route path="/register" element={
            isAuthenticated ? <Navigate to="/dashboard" /> : <RegisterForm />
          } />
          <Route path="/" element={
            isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />
          } />
          <Route path="/dashboard" element={
            isAuthenticated ? (
              <Layout>
                <DashboardPage />
              </Layout>
            ) : (
              <Navigate to="/login" />
            )
          } />
          <Route path="/chat" element={
            isAuthenticated ? (
              <Layout>
                <ChatPage />
              </Layout>
            ) : (
              <Navigate to="/login" />
            )
          } />
          <Route path="/quizzes" element={
            isAuthenticated ? (
              <Layout>
                <QuizzesPage />
              </Layout>
            ) : (
              <Navigate to="/login" />
            )
          } />
          <Route path="/progress" element={
            isAuthenticated ? (
              <Layout>
                <ProgressPage />
              </Layout>
            ) : (
              <Navigate to="/login" />
            )
          } />
          <Route path="/admin" element={
            isAuthenticated ? (
              <Layout>
                <AdminPage />
              </Layout>
            ) : (
              <Navigate to="/login" />
            )
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;