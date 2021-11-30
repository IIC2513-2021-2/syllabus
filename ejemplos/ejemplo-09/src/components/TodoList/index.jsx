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

  // eslint-disable-next-line no-unused-vars
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

  return (
    <div className="container">
      <header>
        <h1 id="title">Todo list</h1>
        <TodoInput />
      </header>
      <section className="todo-list">
        <ul>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}
