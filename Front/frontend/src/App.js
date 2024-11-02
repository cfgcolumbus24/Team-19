import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

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
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/subject/:subject" element={<SubjectPage />} />
            <Route path="/subject/:subject/lesson/:lessonNumber" element={<LessonPage />} />
            <Route path="/subject/:subject/lesson/:lessonNumber/plan/:planId" element={<LessonPlan />} />
            <Route path="*" element={<div>Page not found</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;