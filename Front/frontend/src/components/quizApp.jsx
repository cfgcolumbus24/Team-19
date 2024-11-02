// src/App.jsx
import React from 'react';
import Quiz from './quiz';
import './quiz.css';

const App = () => {
  return (
    <div className="App">
      <h1 className="text-center mt-5">Welcome to the Quiz</h1>
      <Quiz />
    </div>
  );
};

export default App;
