import React from "react";

const Settings = ({ data, setData }) => {
  const { theme } = data;

  const handleInputTheme = (e) => {
    setData((prevSate) => ({ ...prevSate, theme: e.target.name }));
  };
  return (
    <div className="settings-tab">
      <h2> Settings </h2>
      <div>
        <label>
          <input
            type="radio"
            name="dark"
            checked={theme === "dark"}
            onChange={handleInputTheme}
          />{" "}
          Dark
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="light"
            checked={theme === "light"}
            onChange={handleInputTheme}
          />{" "}
          Light
        </label>
      </div>
    </div>
  );
};

export default Settings;
