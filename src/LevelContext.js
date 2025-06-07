// LevelContext.js
import React, { createContext, useState } from 'react';

export const LevelContext = createContext();

export const LevelProvider = ({ children }) => {
  const [isLevel1Cleared, setIsLevel1Cleared] = useState(true); // Level 1 is open by default
  const [isLevel2Cleared, setIsLevel2Cleared] = useState(false);
  const [isLevel3Cleared, setIsLevel3Cleared] = useState(false);
  const [isLevel4Cleared, setIsLevel4Cleared] = useState(false);

  
  
  const clearLevel1 = () => setIsLevel1Cleared(true);
  const clearLevel2 = () => setIsLevel2Cleared(true);
  const clearLevel3 = () => setIsLevel3Cleared(true);
  const clearLevel4 = () => setIsLevel4Cleared(true);

  return (
    <LevelContext.Provider
      value={{
        isLevel1Cleared,
        isLevel2Cleared,
        isLevel3Cleared,
        isLevel4Cleared,
        clearLevel1,
        clearLevel2,
        clearLevel3,
        clearLevel4,
      }}
    >
      {children}
    </LevelContext.Provider>
  );
};
