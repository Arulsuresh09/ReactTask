// src/components/Display.js
import React from 'react';

const Display = ({ name, age }) => {
  return (
    <div>
      <h2>Display Information</h2>
      {name && <p>Name: {name}</p>}
      {age && <p>Age: {age}</p>}
    </div>
  );
};

export default Display;
