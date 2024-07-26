import React from 'react';

const DisplayMousePosition = ({ mouse }) => {
  return (
    <div>
      <h1>Mouse Position</h1>
      <p>X: {mouse.mouseX}</p>
      <p>Y: {mouse.mouseY}</p>
    </div>
  );
};

export default DisplayMousePosition;
