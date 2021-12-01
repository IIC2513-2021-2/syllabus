import React, { /* useEffect, */useState } from 'react';
import TodoForm from './TodoForm';
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

  // useEffect(() => {
  //   console.log('%cTodoList: effect after every render', 'color: cornflowerblue');
  //   return () => console.log('%cTodoList: effect CLEANUP after every render but before new effect', 'color: cornflowerblue');
  // });

  // useEffect(() => {
  //   console.log('%cTodoList: effect after mounting', 'color: lightsalmon');
  //   return () => console.log('%cTodoList: effect CLEANUP when unmounting', 'color: lightsalmon');
  // }, []);

  // useEffect(() => {
  //   console.log('%cTodoList: effect after todos state is updated', 'color: darkseagreen');
  //   return () => console.log('%cTodoList: effect CLEANUP after todos state is updated', 'color: darkseagreen');
  // }, [todos]);

  // console.log('%cTodoList: render', 'color: orchid');

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

  const handleAddTodo = (title, completed = false) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: Number(prevTodos[prevTodos.length - 1].id) + 1,
        title,
        completed,
      },
    ]);
  };

  return (
    <div className="container">
      <header>
        <h1 id="title">Todo list</h1>
        <TodoForm onAdd={handleAddTodo} />
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
