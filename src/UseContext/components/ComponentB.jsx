import React, { useContext } from "react";
import { Context1 } from "../UseContext";

const ComponentB = () => {
  let candidate = useContext(Context1);
  return (
    <>
      <h2>Component B</h2>
      <h3>Name: {candidate.name}</h3>
      <h3>Position: {candidate.position}</h3>
    </>
  );
};

export default ComponentB;
