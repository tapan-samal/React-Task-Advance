import React, { createContext } from "react";
import ChildComponent from "./ChildComponent";

export const Context = createContext();

const ParentComponent = () => {
  let candidate = { name: "Tapan", post: "React Developer" };
  return (
    <>
      <Context.Provider value={candidate}>
        <ChildComponent />
      </Context.Provider>
    </>
  );
};

export default ParentComponent;
