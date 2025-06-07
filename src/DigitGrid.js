
import React, { useState } from "react";
import "./DigitGrid.css";


const DigitGrid = ({ handleDigitClick, handleDecimalClick, handleClear }) => {
  return (
    <div className="button-grid-10">
      {[...Array(10).keys()].map((digit) => (
        <button
          key={digit}
          className="grid-button-1"
          onClick={() => handleDigitClick(digit.toString())}
        >
          {digit}
        </button>
      ))}
      <button className="grid-button-d" onClick={handleDecimalClick}>
        .
      </button>
      <button className="clear-button" onClick={() => handleClear()}>
        <svg
          width="28"
          height="18"
          viewBox="0 0 28 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.83569 0H10.2499H26.2499H27.2499V1V17V18H26.2499H10.2499H9.83569L9.5428 17.7071L1.5428 9.70711L0.835693 9L1.5428 8.29289L9.5428 0.292893L9.83569 0ZM10.6641 2L3.66412 9L10.6641 16H25.2499V2H10.6641ZM14.2499 4.58578L14.957 5.29288L17.2499 7.58578L19.5428 5.29289L20.2499 4.58579L21.6641 6L20.957 6.70711L18.6641 9L20.957 11.2929L21.6641 12L20.2499 13.4142L19.5428 12.7071L17.2499 10.4142L14.957 12.7071L14.2499 13.4142L12.8357 12L13.5428 11.2929L15.8357 9L13.5428 6.7071L12.8357 5.99999L14.2499 4.58578Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
};
export default DigitGrid;
/* Union */
