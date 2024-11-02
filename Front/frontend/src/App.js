import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import SubjectPage from './SubjectPage';
import LessonPage from './LessonPage';
import MainDrop from './components/MainDrop';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LessonPlan from './LessonPlan';

function App() {
    return (
        <Router>
            <div className="app-container">
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/subject/:subject" element={<SubjectPage />} />
                        <Route path="/lessonplan/:subject/:lessonNumber/:planId" element={<LessonPlan />} />
                        <Route path="/lesson/:subject/:lessonNumber" element={<LessonPage />} />
                        <Route path="*" element={<div>Page not found</div>} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}
export default App;