// src/components/Contact.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>Contact Page</h1>
      <p>This is the Contact Page.</p>
      <button onClick={goToHome}>Go to Home</button>
    </div>
  );
};

export default Contact;
