import React from "react";
import "./QuizInterface.css";

const Resolve = () => {
  return (
    <div className="quiz-interface-container">
      <header className="quiz-header">
        <div className="logo">
          <img src="https://lms.7speaking.com/nasimages/1800words/logo.png" alt="logo" className="logo-image" />
          <h6 className="quiz-title">Les nombres</h6>
        </div>
      </header> 
      <div className="quiz-container">
        <div className="question-card">
          <h2 className="question-title">2</h2>
          <img src="https://lms.7speaking.com/nasimages/1800words/1865.jpg" alt="question" className="question-image" />
          <div className="answers">
            <button className="answer-button">ten</button>
            <button className="answer-button">twelve</button>
            <button className="answer-button">fourteen</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resolve;
