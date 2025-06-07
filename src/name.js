import React, {useState} from 'react';
import {  useNavigate } from 'react-router-dom';
import './App.css';
function UserName(){
     const [name, setName] = useState('');
  const [savedName, setSavedName] = useState(null);
  const navigate = useNavigate();

  const handleSave = () => {
    setSavedName(name);
  };

  return (
    <div className="enter-name-container">
      <h1>{savedName ? `Hello, ${savedName}!` : 'Enter your name'}</h1>
      {!savedName && (
        <>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="name-input"
          />
          <button onClick={handleSave} className="save-button">Save</button>
        </>
      )}
      <button onClick={() => navigate('/')} className="back-button">Go Back</button>
      {savedName && (
        <button onClick={() => setSavedName(null)} className="edit-button">Change Name</button>
      )}
    </div>
  );
  }
  export default UserName;