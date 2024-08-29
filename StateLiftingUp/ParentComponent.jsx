import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <ChildComponent
        count={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    </>
  );
};

export default ParentComponent;
