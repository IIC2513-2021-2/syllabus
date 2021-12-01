import React/*, { useEffect }*/ from 'react';

export default function TodoItem(props) {
  const { todo, onRemove, onToggle } = props;

  // useEffect(() => {
  //   console.log('%c\tTodoItem: effect after every render', 'color: cornflowerblue');
  // });

  // useEffect(() => {
  //   console.log('%c\tTodoItem: effect after mounting', 'color: lightsalmon');
  // }, []);

  // useEffect(() => {
  //   console.log(`%c\tTodoItem: effect after todo prop with id ${todo.id} changes`, 'color: darkseagreen');
  // }, [todo]);

  // console.log('%c\tTodoItem: render', 'color: orchid');

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
