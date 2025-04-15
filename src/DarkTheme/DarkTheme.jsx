import React from "react";
import ThemeProvider from "./context/ThemeContext";
import Header from "./components/Header";
import "./dark-theme.css";

const DarkTheme = () => {
  return (
    <ThemeProvider>
      <Header />
    </ThemeProvider>
  );
};

export default DarkTheme;
