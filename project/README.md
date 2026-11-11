# EduTutor AI - Learn with Aivi

A comprehensive full-stack learning platform powered by AI, featuring personalized tutoring, adaptive quizzes, and detailed progress tracking.

## Features

- **AI-Powered Tutoring**: Interactive chat with Aivi, your intelligent learning assistant
- **Adaptive Learning**: Personalized content based on student progress and performance
- **Quiz Generation**: AI-generated quizzes tailored to individual learning needs
- **Progress Tracking**: Detailed analytics and progress visualization
- **Role-Based Access**: Student and teacher dashboards with appropriate features
- **Mobile-First Design**: Responsive design optimized for all devices

## Technology Stack

- **Frontend**: React + TypeScript, Tailwind CSS
- **State Management**: Zustand
- **Charts**: Recharts
- **Authentication**: Supabase Auth
- **Database**: Supabase (PostgreSQL)
- **Animations**: Framer Motion
- **Build Tool**: Vite

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Supabase account

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Add your Supabase credentials

4. Start the development server:
   ```bash
   npm run dev
   ```

## Database Setup

To set up the database, you'll need to:

1. Create a Supabase project
2. Set up the database schema using the migration files
3. Configure Row Level Security (RLS) policies
4. Add the Supabase credentials to your environment variables

## AI Integration

The platform is designed to integrate with AI services like OpenAI's GPT-4. To enable full AI functionality:

1. Sign up for an OpenAI API key
2. Configure the AI service in the chat store
3. Replace the mock AI responses with actual API calls

## Features Overview

### For Students
- Interactive dashboard with progress overview
- Real-time chat with Aivi for learning assistance
- Personalized quiz recommendations
- Progress tracking and achievement system

### For Teachers
- Comprehensive analytics dashboard
- Student progress monitoring
- Content management capabilities
- Class performance insights

## Project Structure

```
src/
├── components/        # React components
│   ├── Auth/         # Authentication components
│   ├── Chat/         # Chat interface
│   ├── Dashboard/    # Dashboard components
│   ├── Layout/       # Layout components
│   ├── Progress/     # Progress tracking
│   └── Quizzes/      # Quiz components
├── pages/            # Page components
├── store/            # Zustand stores
├── types/            # TypeScript types
└── lib/              # Utility functions
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.