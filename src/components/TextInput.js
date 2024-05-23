import React, { useState } from 'react';

const TextInput = ({ onTextChange }) => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
    onTextChange(e.target.value);
  };

  return (
    <textarea
      value={text}
      onChange={handleChange}
      className="text-input"
      placeholder="Enter text here..."
    />
  );
};

export default TextInput;
