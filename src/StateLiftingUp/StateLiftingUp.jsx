import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const StateLiftingUp = () => {
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
    < div style={{textAlign:'center'}}>
      <ChildComponent
        count={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    </div>
  );
};

export default StateLiftingUp;
