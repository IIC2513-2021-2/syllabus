import React from 'react';

export default function TodoItem(props) {
  const { todo } = props;
  return (
    <li className={`todo-item${todo.completed ? ' completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => {}}
      />
      <span>{todo.title}</span>
      <button type="button">🗑</button>
    </li>
  );
}
