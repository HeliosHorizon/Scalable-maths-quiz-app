import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Qcomponent.css';
import DigitGrid from './DigitGrid';
import AnswerInput from './AnswerInput';
import winSound from './achievementbell.wav';
import failSound from './failiure.wav';
import correctPopupImg from './correctanswerbox.png';
import incorrectPopupImg from './wronganswerbox.png';
import bell from './game_screen_bell_icons.png'
import stars from './stargroup.png';


function getOneDigitNumber() {
  return Math.floor(Math.random() * 9) + 1; // Generates a random number between 1 and 9
}

function getTwoDigitNumber() {
  return Math.floor(Math.random() * 90) + 10; // Generates a random number between 10 and 99
}

function generateQuestion() {
  const num1 = getTwoDigitNumber();
  const num2 = getOneDigitNumber();
  return {
    num1,
    num2,
    correctAnswer: parseFloat((num1 / num2).toFixed(2)) // Rounds to 2 decimal places
  };
}

function DivideQuiz2(){
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [lastAnswerCorrect, setLastAnswerCorrect] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [popupMessage2, setPopupMessage2] = useState('');
  const [popupImage, setPopupImage] = useState(incorrectPopupImg); 
  const [answerSummary, setAnswerSummary] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false); // New state for submission control
  const navigate = useNavigate();

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
    if (isSubmitting) return; // Prevent multiple submissions
    setIsSubmitting(true);

    const userAnswerFloat = parseFloat(userAnswer);
    const correctAnswer = parseFloat(questions[currentQuestionIndex].correctAnswer.toFixed(2));
    const isCorrect = userAnswerFloat === correctAnswer;

    if (isCorrect) {
      setScore(score + 1);
      playSound(winSound);
    } else {
      playSound(failSound);
    }

    setAnswerSummary(prevSummary => [
      ...prevSummary,
      {
        question: `${questions[currentQuestionIndex].num1} + ${questions[currentQuestionIndex].num2} = ?`,
        userAnswer: userAnswerFloat,
        correctAnswer,
        isCorrect,
      }
    ]);

    setPopupMessage(isCorrect ? 'Keep it up!' : 'Incorrect!');
    const icon = (
      <img 
        src={stars} 
        alt='img'
        style={{ width: '30px', height: '30px',marginTop: '10px', marginRight: '10px' }} 
      />
    );
  
    setPopupMessage2(
      <span>
        {icon}
        {isCorrect ? '+1' : '+0'}
      </span>
    );
    setPopupImage(isCorrect ? correctPopupImg : incorrectPopupImg);
    setLastAnswerCorrect(isCorrect);
    setShowPopup(true);
  };

  const handleClear = () => {
    setUserAnswer('');
  };

  const handleNextQuestion = () => {
    setIsSubmitting(false); // Reset the submit state here
    if (currentQuestionIndex + 1 < questions.length) {
      setShowPopup(false);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setUserAnswer('');
    } else {
      // Navigate to the Summary page after the last question
      navigate('/summary', {
        state: {
          score,
          answerSummary
        }
      });
    }
  };

  const playSound = (sound) => {
    const audio = new Audio(sound);
    audio.play();
  };

  if (currentQuestionIndex >= questions.length) {
    return null;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="container2">
      <img src={bell} alt="Popup" className="quiz-image1" />
      <button className="back-link1" onClick={() => navigate('/Divide')}>&lt;</button>   
          
      <p className="qu">Question {currentQuestionIndex + 1} of 10</p>
      <p className="p">{currentQuestion.num1} / {currentQuestion.num2} </p>
      <div className="answer-section">
        <AnswerInput userAnswer={userAnswer} />
        <p className='equals'>=</p>
      </div>
      <div className='contain'>
        <button
          className="submit-button"
          onClick={handleSubmit}
          disabled={isSubmitting} // Disable the button if it's submitting
        >
          Check Answer
        </button>
        <DigitGrid handleDigitClick={handleDigitClick} handleDecimalClick={handleDecimalClick} handleClear={handleClear} />
        
      </div>
      
      {showPopup && (
        <div className="popup">
          <img src={popupImage} alt="Popup" className="popup-image" />
          <p className="popup-message">{popupMessage}</p>
          <p className="popup-message2">{popupMessage2}</p>
          
          <button className="next-button" onClick={handleNextQuestion}>Next Question</button>
        </div>
      )}
    </div>
  );
}

export default DivideQuiz2;
