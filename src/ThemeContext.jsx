import React, { createContext, useState, useContext } from "react";
const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [lightMode, setLightMode] = useState(false);

  const toggleTheme = () => {
    setLightMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ lightMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
