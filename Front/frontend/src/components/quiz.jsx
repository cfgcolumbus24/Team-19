// src/components/Quiz.jsx
import { useState } from 'react';
import quizContent from './quizContent';
import 'bootstrap/dist/css/bootstrap.min.css';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [feedback, setFeedback] = useState("");
  const question = quizContent[currentQuestion];

  const handleAnswerClick = (choice) => {
    if (choice === question.correctAnswer) {
      setFeedback("Correct!");
    } else {
      setFeedback("That's not correct.");
    }

    // Automatically move to the next question after 2 seconds
    setTimeout(() => {
      setFeedback("");  // Clear feedback
      if (currentQuestion < quizContent.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setFeedback("Quiz Complete!");
      }
    }, 2000);
  };

  const handleSkipClick = () => {
    setFeedback("This wasn't covered in lesson plan");

    // Automatically move to the next question after 2 seconds
    setTimeout(() => {
      setFeedback("");  // Clear feedback
      if (currentQuestion < quizContent.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setFeedback("Quiz Complete!");
      }
    }, 2000);
  };

  return (
    <div className="quiz container mt-5">
      <h2 className="text-center mb-4">Question {currentQuestion + 1}</h2>
      <div className="card">
        <div className="card-body">
          <p className="card-text">{question.question}</p>
          <div className="btn-group-vertical w-100" role="group" aria-label="Answer choices">
            {question.choices.map((choice, index) => (
              <button
                key={index}
                className="btn btn-outline-primary mb-2"
                onClick={() => handleAnswerClick(choice)}
              >
                {choice}
              </button>
            ))}
          </div>
          <button className="btn btn-warning mt-3 w-100" onClick={handleSkipClick}>
            This wasn't covered in lesson plan
          </button>
        </div>
      </div>
      {feedback && (
        <div className={`alert mt-4 ${feedback === "Correct!" ? "alert-success" : "alert-danger"}`}>
          {feedback}
        </div>
      )}
    </div>
  );
};

export default Quiz;
