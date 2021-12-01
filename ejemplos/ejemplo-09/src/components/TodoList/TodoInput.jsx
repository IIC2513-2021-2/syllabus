import React, { useState } from 'react';

export default function TodoInput({ onAdd }) {
  const [title, setTitle] = useState('');

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.code === 'Enter' && title) {
      onAdd(title);
      setTitle('');
    }
  }

  return (
    <input
      type="text"
      className="add-todo"
      placeholder="Agregar todo y presionar Enter"
      onKeyPress={handleKeyPress}
      onChange={handleChange}
      value={title}
    />
  );
}
