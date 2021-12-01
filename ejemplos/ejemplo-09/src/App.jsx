import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  const [mounted, setMounted] = useState(true);

  const toggleMounted = () => {
    setMounted((prevMounted) => !prevMounted);
  };

  return (
    <main className="centered">
      <button type="button" onClick={toggleMounted}>
        {mounted ? 'Unmount' : 'Mount'}
      </button>
      {mounted ? <TodoList /> : null}
    </main>
  );
}

export default App;
