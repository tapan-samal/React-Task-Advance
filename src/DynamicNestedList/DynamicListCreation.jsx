import React, { useState } from "react";

const DynamicListCreation = () => {
  const [isParentInputFieldVisible, setParentInputFieldVisible] = useState(false);
  const [parentInputData, setParentInputData] = useState("");
  const [childInputData, setChildInputData] = useState("");
  const [subChildInputData, setSubChildInputData] = useState("");
  const [displayData, setDisplayData] = useState([]);

  const handleParentIBtnClick = () => {
    setParentInputFieldVisible(true);
  };

  const handleParentInputBtnClick = () => {
    setDisplayData([...displayData, { value: parentInputData, children: [] }]);
    setParentInputFieldVisible(false);
    setParentInputData("");
  };

  const handleChildBtnClick = (parentIndex) => {
    setDisplayData(
      displayData.map((item, key) => key === parentIndex ? { ...item, isChildInputFieldVisible: true } : item)
    );
  };

  const handleChildInputBtnClick = (parentIndex) => {
    setDisplayData(
      displayData.map((item, key) => key === parentIndex ? 
            {...item, children: [...item.children, { value: childInputData, subChildren: [] }],
            isChildInputFieldVisible: false,
            }
          : item
      )
    );
    setChildInputData("");
  };

  const handleSubChildBtnClick = (parentIndex, childIndex) => {
    setDisplayData(
      displayData.map((item, key) =>
        key === parentIndex ? {
              ...item,
              children: item.children.map((child, index) => index === childIndex
                  ? { ...child, isSubChildInputFieldVisible: true } : child
              ),
            } : item
      )
    );
  };

  const handleSubChildInputBtnClick = (parentIndex, childIndex) => {
    setDisplayData(
      displayData.map((item, key) =>
        key === parentIndex
          ? {...item, children: item.children.map((child, index) => index === childIndex ? {
                      ...child, subChildren: [...child.subChildren, { value: subChildInputData, subSubChildren: [] },
                      ], isSubChildInputFieldVisible: false, } : child),
            }: item)
    );
    setSubChildInputData("");
  };

  return (
    <>
      <h2>Dynamic List Creation</h2>
      <ul>
        {displayData.map((parentData, parentIndex) => (
          <li key={parentIndex}>
            {parentData.value}
            <ul>
              {parentData.children.map((childData, childIndex) => (
                <li key={childIndex}>
                  {childData.value}
                  <ul>
                    {childData.subChildren.map((subChildData, subChildIndex) => (
                      <li key={subChildIndex}>{subChildData.value}</li>
                    ))}
                    
                      <li>
                        {childData.isSubChildInputFieldVisible ? (
                          <>
                            <input
                              type="text"
                              value={subChildInputData}
                              onChange={(e) => setSubChildInputData(e.target.value)}
                            />
                            <button className="tick" onClick={() => handleSubChildInputBtnClick(parentIndex, childIndex)}>&#10003;</button>
                          </>
                        ) : (
                          <button onClick={() => handleSubChildBtnClick(parentIndex, childIndex)}>
                            S+
                          </button>
                        )}
                      </li>
                  </ul>
                </li>
              ))}
              
                <li>
                  {!parentData.isChildInputFieldVisible ? (
                    <button onClick={() => handleChildBtnClick(parentIndex)}>C+</button>
                  ) : (
                    <>
                      <input
                        autoFocus
                        type="text"
                        value={childInputData}
                        onChange={(e) => setChildInputData(e.target.value)}
                      />
                      <button className="tick" onClick={() => handleChildInputBtnClick(parentIndex)}>
                        &#10003;
                      </button>
                    </>
                  )}
                </li>
            </ul>
          </li>
        ))}
        {!isParentInputFieldVisible ? (
          <button onClick={handleParentIBtnClick}>P+</button>
        ) : (
          <>
            <input autoFocus type="text" value={parentInputData}
              onChange={(e) => setParentInputData(e.target.value)}
            />
            <button className="tick" onClick={handleParentInputBtnClick}>&#10003;</button>
          </>
        )}
      </ul>
    </>
  );
};

export default DynamicListCreation;
