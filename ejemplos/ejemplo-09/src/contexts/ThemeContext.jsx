import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode((mode) => !mode);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
