import React from 'react';

export default function TodoItem(props) {
  const { todo, onRemove, onToggle } = props;

  return (
    <li className={`todo-item${todo.completed ? ' completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={onToggle}
      />
      <span>{todo.title}</span>
      <button type="button" onClick={onRemove}>🗑</button>
    </li>
  );
}
