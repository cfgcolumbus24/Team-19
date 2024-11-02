import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import SubjectPage from './SubjectPage';
import LessonPage from './LessonPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subject/:subject" element={<SubjectPage />} />
          <Route path="/subject/:subject/lesson/:lessonNumber" element={<LessonPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;