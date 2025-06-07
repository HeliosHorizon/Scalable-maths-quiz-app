import React, { useEffect, useRef } from 'react';

const AnswerInput = ({ userAnswer }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      // Calculate the width in ch units based on the length of the userAnswer
      const length = userAnswer ? userAnswer.length + 1 : 1;
      inputRef.current.style.width = `${length}ch`;
    }
  }, [userAnswer]);

  return (
    <div className="answer-section">
      <input 
        type="text" 
        value={userAnswer} 
        readOnly 
        ref={inputRef} 
        className="answer-input" 
      />
    </div>
  );
};

export default AnswerInput;
