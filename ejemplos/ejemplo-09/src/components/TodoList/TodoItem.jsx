import React, { useContext/* , useEffect */} from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

export default function TodoItem(props) {
  const { todo, onRemove, onToggle } = props;
  const { toggleDarkMode } = useContext(ThemeContext);

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

  const handleToggle = () => {
    onToggle();
    toggleDarkMode();
  };

  return (
    <li className={`todo-item${todo.completed ? ' completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggle}
      />
      <span>{todo.title}</span>
      <button type="button" onClick={onRemove}>🗑</button>
    </li>
  );
}
