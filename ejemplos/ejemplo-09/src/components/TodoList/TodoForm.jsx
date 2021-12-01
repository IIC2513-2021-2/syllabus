import React, { useState } from 'react';

const INITIAL_VALUES = {
  title: '',
  completed: false,
};

export default function TodoForm({ onAdd }) {
  const [values, setValues] = useState(INITIAL_VALUES);

  const handleChange = (event) => {
    const { checked, value, type, name } = event.target;
    const fieldValue = type === 'checkbox' ? checked : value;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: fieldValue,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { title, completed } = values;
    if (title) {
      onAdd(title, completed);
      setValues(INITIAL_VALUES);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        className="add-todo"
        placeholder="Agregar todo y presionar Enter"
        onChange={handleChange}
        value={values.title}
      />
      <label className="completed-todo" htmlFor="completed">
        <input
          type="checkbox"
          name="completed"
          id="completed"
          onChange={handleChange}
          checked={values.completed}
        />
        ¿Completado?
      </label>
      <button type="submit">Agregar</button>
    </form>
  );
}
