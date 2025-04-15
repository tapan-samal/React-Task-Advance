import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import SunIcon from "./SunIcon";
import MoonIcon from "./MoonIcon";

const Header = () => {
  const { isDark, setIsDark } = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
      </ul>
      <button className="theme-button"
        onClick = {toggleTheme}
      >
        {isDark ? <SunIcon /> : <MoonIcon />}
      </button>
    </nav>
  );
};

export default Header;
