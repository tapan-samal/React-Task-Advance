import React, { useState, useEffect } from "react";
import "./digitalClock.css";

const DigitalClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalTime = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalTime);
  }, []);

  const formatTime = (time) => {
    const hours = time.getHours().toString().padStart(2, "0");
    const minutes = time.getMinutes().toString().padStart(2, "0");
    const seconds = time.getSeconds().toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };
  console.log(new Date());
  return (
    <div className="container">
      <div className="digi-clock">
        <h1>Digital Clock </h1>
        <p>{formatTime(currentTime)}</p>
      </div>
    </div>
  );
};

export default DigitalClock;
