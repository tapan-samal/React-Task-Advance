import React, { useState } from "react";
import { createContext } from "react";
import ComponentA from "./components/ComponentA"

export const Context1 = createContext();
export const Context2 = createContext();

const UseContext = () => {
  const candidate = { name: "Tapan", position: "React Developer" };

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <Context1.Provider value={candidate}>
      <Context2.Provider value={{ count, handleIncrement, handleDecrement }}>
        <h1>UseContext</h1>
        <ComponentA />
      </Context2.Provider>
    </Context1.Provider>
  );
};

export default UseContext;