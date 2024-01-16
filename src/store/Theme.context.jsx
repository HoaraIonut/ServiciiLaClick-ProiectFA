import { createContext, useContext, useState, React } from "react";

export const ThemeContext = createContext({
  theme: "light",
  switchTheme: () => {},
});

export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') === 'dark' ? 'dark' : 'light');

  const switchTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        switchTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
