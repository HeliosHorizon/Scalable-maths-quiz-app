import React from 'react';
import { useNavigate } from 'react-router-dom';
import './option.css';

function Divide() {
  const navigate = useNavigate();
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
      <button className="back-link" onClick={() => navigate('/quiz')}>&lt;</button>
      <p id ='choose'>Choose level of dificulty</p>
      <div className="button-grid-5">
        <button className="grid-button-0"onClick={() => navigate('/Divide_quiz1')}>1</button>
        <button className="grid-button-0"onClick={() => navigate('/Divide_quiz2')}>2</button>
        <button className="grid-button-0"onClick={() => navigate('/Divide_quiz3')}>3</button>
        <button className="grid-button-0"onClick={() => navigate('/Divide_quiz4')}>4</button>
        <button className="grid-button-0"onClick={() => navigate('/Divide_quiz5')}>5</button>
      </div>
      
    </div>
  );
}

export default Divide;
