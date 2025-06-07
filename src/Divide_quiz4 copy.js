import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import DigitGrid from './DigitGrid';
import AnswerInput from './AnswerInput';

function getTwoDigitNumber() {
  return Math.floor(Math.random() * 90) + 10; // Generates a random number between 10 and 99
}

function getThreeDigitNumber() {
  return Math.floor(Math.random() * 900) + 100; // Generates a random number between 100 and 999
}

function generateQuestion() {
  const num1 = getThreeDigitNumber();
  const num2 = getTwoDigitNumber();
  return {
    num1,
    num2,
    correctAnswer: parseFloat((num1 / num2).toFixed(2)) // Rounds to 2 decimal places
  };
}

function DivideQuiz4() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [lastAnswerCorrect, setLastAnswerCorrect] = useState(null);

  useEffect(() => {
    const generatedQuestions = Array.from({ length: 10 }, () => generateQuestion());
    setQuestions(generatedQuestions);
  }, []);

  const handleDigitClick = (digit) => {
    setUserAnswer(userAnswer + digit);
  };

  const handleDecimalClick = () => {
    if (!userAnswer.includes('.')) {
      setUserAnswer(userAnswer + '.');
    }
  };

  const handleSubmit = () => {
    const userAnswerFloat = parseFloat(userAnswer);
    const correctAnswer = parseFloat(questions[currentQuestionIndex].correctAnswer.toFixed(2));
    if (userAnswerFloat === correctAnswer) {
      setScore(score + 1);
      setLastAnswerCorrect(true);
    } else {
      setLastAnswerCorrect(false);
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setUserAnswer('');
  };

  if (currentQuestionIndex >= questions.length) {
    return (
      <div className="container">
        <h1>Quiz Finished</h1>
        <p>Your score: {score} / 10</p>
        <Link to="/Divide" className="back-link">Go Back to levels</Link>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="container">
      <h1>Math Quiz</h1>
      <p class='qu'>Question {currentQuestionIndex + 1} of 10</p>
      <p class='p'>{currentQuestion.num1} / {currentQuestion.num2} = ?</p>
      <div className="answer-section">
        <AnswerInput userAnswer={userAnswer} />
        <span className="score-display">Score: {score}</span>
      </div>
      <DigitGrid handleDigitClick={handleDigitClick} handleDecimalClick={handleDecimalClick} />
      <button className="submit-button" onClick={handleSubmit}>Submit</button>
      {lastAnswerCorrect !== null && (
        <p class='p'>{lastAnswerCorrect ? 'score +1' : 'score +0'}</p>
      )}
    </div>
  );
}

export default DivideQuiz4;
