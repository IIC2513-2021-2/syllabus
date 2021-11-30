import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

const INITIAL_DATA = [
  {
    id: 1,
    title: 'Poner atención en clases',
    completed: false,
  },
  {
    id: 2,
    title: 'Escribir un script JS en cliente',
    completed: false,
  },
  {
    id: 3,
    title: 'Terminar Entrega 3',
    completed: true,
  },
  {
    id: 4,
    title: 'Prepararme para la Interrogación',
    completed: true,
  },
];

export default function TodoList() {
  const [todos, setTodos] = useState(INITIAL_DATA);

  const removeLastTodoItem = () => {
    setTodos(todos.slice(0, todos.length - 1));
  };

  // eslint-disable-next-line no-unused-vars
  const toggleLastTodoItem = () => {
    const newTodos = [...todos];
    const lastTodo = newTodos[todos.length - 1];
    lastTodo.completed = !lastTodo.completed;
    setTodos(newTodos);
  };

  const handleRemoveTodoItem = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleToggleTodoItem = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id !== id) return todo;

      return {
        ...todo,
        completed: !todo.completed,
      };
    });
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <header>
        <h1 id="title">Todo list</h1>
        <TodoInput />
      </header>
      <section className="todo-list">
        <button onClick={removeLastTodoItem}>Eliminar último todo</button>
        <ul>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onRemove={() => handleRemoveTodoItem(todo.id)}
              onToggle={() => handleToggleTodoItem(todo.id)}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}
