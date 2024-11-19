import React, { useState } from "react";
import { accordionData } from "./data.jsx";
import "./accordion.css";

const Accordion = () => {
  const [isActive, setIsActive] = useState(null);

  const handleActive = (index) => {
    setIsActive(isActive === index ? null : index);
  };

  return (
    <div className="a-main">
      <h1 style={{ color: "#fff" }}>Accordion</h1>
      {accordionData.map((data, index) => {
        return (
          <div key={index} onClick={() => handleActive(index)}>
            <div className="section">
              <div className="title">{data.title}</div>{" "}
              <div className="icon">{isActive === index ? "-" : "+"}</div>
            </div>
            {isActive === index && (
              <div className="section">{data.content}</div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
