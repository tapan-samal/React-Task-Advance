import React, { useState } from "react";
import "./shauffle-item.css";

const ShauffleItem = () => {
  const [names, setNames] = useState([
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "Express",
    "MongoDB",
    "Python",
    "MySQL"
  ]);

  const handleShuffleBtn = () => {
    const shauffleItems = [...names];
    for (let i = shauffleItems.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [shauffleItems[i], shauffleItems[j]] = [
        shauffleItems[j],
        shauffleItems[i],
      ];
    }
    setNames(shauffleItems);
  };

  return (
    <div className="container">
      <h1>Shuffle List Items</h1>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <button onClick={handleShuffleBtn}>Shuffle Item</button>
    </div>
  );
};

export default ShauffleItem;
