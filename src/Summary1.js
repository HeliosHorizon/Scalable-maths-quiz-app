
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Summary.css"; // Import the Summary-specific CSS
const Summary1 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { score, answerSummary } = location.state || {
    score: 8,
    answerSummary: [],
  };

  return (
    <div className="summary-container">
      <div className="circle circle1"></div>
      <div className="circle circle2"></div>
      <div className="circle circle3"></div>
      <div className="circle circle4"></div>
      <div className="ring ring1"></div>
      <div className="ring ring2"></div>
      <div className="ring ring3"></div>
      <div className="ring ring4"></div>
      <div className="score-board">
        <div className="score-header">Score Board {score}/10</div>
        <div className="answers-list">
          {answerSummary.map((summary, index) => (
            <div key={index} className="answer-item">
              <span className="equation">{summary.question}</span>
              <span className="user-answer">
                {isNaN(summary.userAnswer) ? "" : summary.userAnswer}
              </span>
              <span
                className={`result ${
                  summary.isCorrect ? "correct" : "incorrect"
                }`}
              >
                {summary.isCorrect ? "✓" : "✗"}
              </span>
            </div>
          ))}
        </div>
      </div>
      <button className="next-level-btn" onClick={() => navigate("/Subtract")}>
        Next Level
      </button>
    </div>
  );
};

export default Summary1;
