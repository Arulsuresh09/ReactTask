import React, { useState } from 'react';
import Form from './Form';
import Display from './Display';

function App() {
  const [formData, setFormData] = useState({ name: '', age: '' });

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div>
      <h1>State Lift-Up Example</h1>
      <Form onFormSubmit={handleFormSubmit} />
      <Display name={formData.name} age={formData.age} />
    </div>
  );
}

export default App;