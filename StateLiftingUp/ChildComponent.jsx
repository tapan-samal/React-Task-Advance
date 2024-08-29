import React from "react";

const ChildComponent = ({count, handleIncrement, handleDecrement}) => {
  return (
    <>
      <h2>Child Component:</h2>
      <h2>{count}</h2>
      <button onClick={handleIncrement}>Increment</button>{" "}
      <button onClick={handleDecrement}>Decrement</button>
    </>
  );
};

export default ChildComponent;
