import React, { useContext, useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import { ThemeContext } from './contexts/ThemeContext';

function App() {
  const [mounted, setMounted] = useState(true);
  const { darkMode } = useContext(ThemeContext);

  const toggleMounted = () => {
    setMounted((prevMounted) => !prevMounted);
  };

  return (
    <main className={`centered${darkMode ? ' dark' : ''}`}>
      <button type="button" onClick={toggleMounted}>
        {mounted ? 'Unmount' : 'Mount'}
      </button>
      {mounted ? <TodoList /> : null}
    </main>
  );
}

export default App;
