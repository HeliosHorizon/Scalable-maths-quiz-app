import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';

import quizImage from './bot-image.png'; // Make sure you place your image in the src folder
import quizImage1 from './math_quiz_splash_icon.png';
import Settings from './settings.js';
import buttonImage1 from './rectangle_1.png'; // Image for button add
import buttonImage2 from './rectangle_2.png'; // Image for button subtract
import buttonImage3 from './rectangle_3.png'; // Image for button multiply
import buttonImage4 from './rectangle_4.png'; // Image for button divide
import Add from './Add.js';
import Subtract from './Subtract.js';
import Multiply from './Multiply.js';
import Divide from './Divide.js';
import Mathadd1 from './Mathadd1.js';
import Mathadd2 from './Mathadd2.js';
import Mathadd3 from './Mathadd3.js';
import Mathadd4 from './Mathadd4.js';
import Mathadd5 from './Mathadd5.js';
import MathSubtract1 from './MathSubtract1.js';
import MathSubtract2 from './MathSubtract2.js';
import MathSubtract3 from './MathSubtract3.js';
import MathSubtract4 from './MathSubtract4.js';
import MathSubtract5 from './MathSubtract5.js';
import MathMultiply1 from './MathMultiply1.js';
import MathMultiply2 from './MathMultiply2.js';
import MathMultiply3 from './MathMultiply3.js';
import MathMultiply4 from './MathMultiply4.js';
import MathMultiply5 from './MathMultiply5.js';
import DivideQuiz1 from './Divide_quiz1.js';
import DivideQuiz2 from './Divide_quiz2.js';
import DivideQuiz3 from './Divide_quiz3.js';
import DivideQuiz4 from './Divide_quiz4.js';
import DivideQuiz5 from './Divide_quiz5.js';
import Summary from './Summary.js';
import Summary1 from './Summary1.js';
import Summary2 from './Summary2.js';
import Summary3 from './Summary3.js';
import triangle from './splash_triangle_shape_icon.png'

import backgroundMusic from './defaultmusic.mp3';

function App() {
  const [audio] = useState(new Audio(backgroundMusic));
  const [hasInteracted, setHasInteracted] = useState(false);  
  useEffect(() => {
    if (hasInteracted) {
      audio.loop = true; // Loop the audio
      audio.volume = 0.2; // Set volume to 20%
      audio.play();

      return () => {
        audio.pause();
        audio.currentTime = 0;
      };
    }
  }, [hasInteracted, audio]);

  return (
    <Routes>
      <Route path="/" element={<Home onUserInteraction={() => setHasInteracted(true)} />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/Add" element={<Add />} />
      <Route path="/Subtract" element={<Subtract />} />
      <Route path="/Multiply" element={<Multiply />} />
      <Route path="/Divide" element={<Divide />} />
      <Route path="/Mathadd1" element={<Mathadd1 />} />
      <Route path="/Mathadd2" element={<Mathadd2 />} />
      <Route path="/Mathadd3" element={<Mathadd3 />} />
      <Route path="/Mathadd4" element={<Mathadd4 />} />
      <Route path="/Mathadd5" element={<Mathadd5 />} />
      <Route path='/MathSubtract1' element={<MathSubtract1 />} />
      <Route path='/MathSubtract2' element={<MathSubtract2 />} />
      <Route path='/MathSubtract3' element={<MathSubtract3 />} />
      <Route path='/MathSubtract4' element={<MathSubtract4 />} />
      <Route path='/MathSubtract5' element={<MathSubtract5 />} />
      <Route path='/MathMultiply1' element={<MathMultiply1 />} />
      <Route path='/MathMultiply2' element={<MathMultiply2 />} />
      <Route path='/MathMultiply3' element={<MathMultiply3 />} />
      <Route path='/MathMultiply4' element={<MathMultiply4 />} />
      <Route path='/MathMultiply5' element={<MathMultiply5 />} />
      <Route path='/Divide_quiz1' element={<DivideQuiz1 />} />
      <Route path='/Divide_quiz2' element={<DivideQuiz2 />} />
      <Route path='/Divide_quiz3' element={<DivideQuiz3 />} />
      <Route path='/Divide_quiz4' element={<DivideQuiz4 />} />
      <Route path='/Divide_quiz5' element={<DivideQuiz5 />} />
      <Route path="/summary" element={<Summary />} />
      <Route path="/summary1" element={<Summary1 />} />
      <Route path="/summary2" element={<Summary2 />} />
      <Route path="/summary3" element={<Summary3 />} />
    </Routes>
  );
}

function Home({ onUserInteraction }) {
  const navigate = useNavigate();

  const handleStart = () => {
    onUserInteraction(); // Notify that the user has interacted with the page
    navigate('/quiz');
  };

  return (
    <div className="container">
      <div className="circle circle1"></div>
      <div className="circle circle2"></div>
      <div className="circle circle3"></div>
      <div className="circle circle4"></div>
      <div className="ring ring1"></div>
      <div className="ring ring2"></div>
      <div className="ring ring3"></div>
      <div className="ring ring4"></div>
      
      <img src={quizImage1} alt="Maths Quiz" className="quiz-image" />
      <img src={quizImage} alt="Maths Quiz" className="quiz-image" />
      <div className="translucent-div">
        <img src={triangle} alt="triangle icon" className="triangle" />
        <p className='over' >IT'S TIME TO</p>
        <p className='over' id='play'>PLAY!</p>
        <button className="play-button , over1" onClick={handleStart}>&gt;</button>
      </div>
      
    </div>
  );
}

function Quiz() {
  const navigate = useNavigate();
  // trackEvent("category",{})
  return (
    <div className="container1">
      <div className="circle circle1"></div>
      <div className="circle circle2"></div>
      <div className="circle circle3"></div>
      <div className="circle circle4"></div>
      <div className="ring ring1"></div>
      <div className="ring ring2"></div>
      <div className="ring ring3"></div>
      <div className="ring ring4"></div>
      <button className="back-link" onClick={() => navigate('/')}>&lt;</button>
      
      <div className="button-grid">
        <button className="grid-button" style={{ backgroundImage: `url(${buttonImage1})`} } onClick={() => navigate('/Add')}></button>
        <button className="grid-button" style={{ backgroundImage: `url(${buttonImage2})`} } onClick={() => navigate('/Subtract')}></button>
        <button className="grid-button" style={{ backgroundImage: `url(${buttonImage4})`} } onClick={() => navigate('/Divide')}></button>
        <button className="grid-button" style={{ backgroundImage: `url(${buttonImage3})`} } onClick={() => navigate('/Multiply')}></button>
      </div>
    </div>
  );
}

export default App;
 