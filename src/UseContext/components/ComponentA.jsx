import React, { useContext } from "react";
import ComponentB from "./ComponentB";
import { Context2 } from "../UseContext";

const ComponentA = () => {
  const { count, handleIncrement, handleDecrement } = useContext(Context2);
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Component A</h2>
      <h2>{count}</h2>
      <button onClick={handleIncrement}>Increment</button>{" "}
      <button onClick={handleDecrement}>Decrement</button>
      <br />
      <br />
      <ComponentB />
    </div>
  );
};

export default ComponentA;
