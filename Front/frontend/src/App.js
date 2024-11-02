
import Home from './Home';
import QuizApp from './components/quizApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SubjectPage from './SubjectPage';
import LessonPage from './LessonPage';
import Quiz from './components/quiz';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/subject/:subject" element={<SubjectPage />} />
          <Route path="/subject/:subject/lesson/:lessonNumber" element={<LessonPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;