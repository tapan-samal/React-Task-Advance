import React, { useState } from "react";
import "./list-styles.css";

const OptimizedListCreation = () => {
  const [isParentInputDisplay, setParentInputDisplay] = useState(false);
  const [parentInputData, setParentInputData] = useState("");
  const [childInputData, setChildInputData] = useState("");
  const [displayData, setDisplayData] = useState([]);
  const [openChildInputIndex, setOpenChildInputIndex] = useState(null);

  const handleParentInputBtn = (e) => {
    // e.preventDefault();
    if (parentInputData.length === 0) {alert("Must fill the input field !!");
    } else {
      setDisplayData([...displayData, { value: parentInputData, children: [] }]);
      setParentInputData("");
      setParentInputDisplay(false);
      setOpenChildInputIndex(null);
    }
  };

  const handleChildInputBtn = (e, parentIndex) => {
    // e.preventDefault();
    if (childInputData.length === 0) {alert("Must fill the input field !!");
    } else {
      setDisplayData((prevData) => {
        return prevData.map((data, key) =>
          key === parentIndex ? {...data, children: [...data.children, { value: childInputData }]} : data );
      });
      setChildInputData("");
      setOpenChildInputIndex(null);
    }
  };

  return (
    <>
      <h2>Dynamic Lists Creation</h2>
      <ul>
        {displayData.map((parent, parentIndex) => (
          <li key={parentIndex}>
            {parent.value}
            <ul>
              {parent.children.map((child, childIndex) => ( <li key={childIndex}>{child.value}</li> ))}
              <li>
                {!isParentInputDisplay && openChildInputIndex === parentIndex ? (
                  <>
                    <input type="text" autoFocus value={childInputData} onChange={(e) => setChildInputData(e.target.value)}
                    />
                    <button className="tick" onClick={(e) => handleChildInputBtn(e, parentIndex)}> &#10003; </button>
                  </>
                ) : (
                  <button className="child-btn" onClick={() => setOpenChildInputIndex(parentIndex)}>+</button>
                )}
              </li>
            </ul>
          </li>
        ))}
        {!isParentInputDisplay ? ( <button onClick={() => setParentInputDisplay(true)}>+</button>
        ) : (
          <div>
            <input type="text" autoFocus value={parentInputData} onChange={(e) => setParentInputData(e.target.value)} />
            <button className="tick" onClick={(e) => handleParentInputBtn(e)}> &#10003; </button>
          </div>
        )}
      </ul>
    </>
  );
};

export default OptimizedListCreation;
