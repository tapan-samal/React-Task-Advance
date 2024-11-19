import React, { useState } from "react";

const NestedListItems = () => {
  const [isBrandExpanded, setBrandExpanded] = useState(false);
  const [isModelExpanded, setModelExpanded] = useState(false);
  const [isColori5Expanded, setColori5Expanded] = useState(false);
  const [isColori7Expanded, setColori7Expanded] = useState(false);

  const handleToggleBrand = () => setBrandExpanded(!isBrandExpanded);
  const handleToggleModel = () => setModelExpanded(!isModelExpanded);
  const handleTogglei5Color = () => {
    setColori5Expanded(!isColori5Expanded)
    
  };
    const handleTogglei7Color = () => {
      setColori7Expanded(!isColori7Expanded)
  };

  return (
    <div>
      <h2>Nested List Items : </h2>
      <ul>
        <li>
          Car{" "}
          <button onClick={handleToggleBrand}>
            {isBrandExpanded ? "-" : "+"}
          </button>
          {isBrandExpanded && (
            <ul>
              <li>
                BMW{" "}
                <button onClick={handleToggleModel}>
                  {isModelExpanded ? "-" : "+"}
                </button>
                {isModelExpanded && (
                  <ul>
                    <li>
                      BMW i5{" "}
                      <button onClick={handleTogglei5Color}>
                        {isColori5Expanded ? "-" : "+"}
                      </button>
                      {isColori5Expanded && (
                        <ul>
                          <li>BMW i5 Black</li>
                          <li>BMW i5 White</li>
                        </ul>
                      )}
                    </li>

                    <li>
                      BMW i7{" "}
                      <button onClick={handleTogglei7Color}>
                        {isColori7Expanded ? "-" : "+"}
                      </button>
                      {isColori7Expanded && (
                        <ul>
                          <li>BMW i7 Black</li>
                        </ul>
                      )}
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default NestedListItems;
