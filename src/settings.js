import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Settings() {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const savedName = localStorage.getItem('userName');
    if (savedName) {
      setName(savedName);
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('userName', name); // Update name in localStorage
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="container">
      <h1>Settings</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Change your name"
      />
      <button onClick={handleSave}>Save Changes</button>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}

export default Settings;
