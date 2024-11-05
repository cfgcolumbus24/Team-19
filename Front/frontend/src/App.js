import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage'; // Ensure the path is correct
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Home';
import SubjectPage from './SubjectPage';
import LessonPage from './LessonPage';
import LessonPlan from './LessonPlan';
import Quiz from './components/quiz';
import QuizApp from './components/quizApp';
import MainDrop from './components/MainDrop';

function App() {
  return (
    <Router>
      <div className="app-container">
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/subject/:subject" element={<SubjectPage />} />
            <Route path="/subject/:subject/lesson/:lessonNumber" element={<LessonPage />} />
            <Route path="/subject/:subject/lesson/:lessonNumber/plan/:planId" element={<LessonPlan />} />
            <Route path="*" element={<div>Page not found</div>} />
            <Route path="/quiz" element={<QuizApp />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
