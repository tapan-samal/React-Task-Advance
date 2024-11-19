import React, { useState } from "react";
import "./swap-list.css";

const SwapListItems = () => {
  const [list1, setList1] = useState([
    { title: "Item 1", checked: false },
    { title: "Item 2", checked: false },
    { title: "Item 3", checked: false },
  ]);
  const [list2, setList2] = useState([
    { title: "Item A" },
    { title: "Item B" },
    { title: "Item C" },
  ]);

  const handleCheckBoxClick = (index) => {
    const updatedList1 = [...list1];
    updatedList1[index].checked = !updatedList1[index].checked;
    setList1(updatedList1);
  };

  const handleSwapList = () => {
    const updatedList1 = [...list1];
    const updatedList2 = [...list2];
    updatedList1.forEach((item, index) => {
      if (item.checked) {
        [updatedList1[index].title, updatedList2[index].title] = [
          updatedList2[index].title,
          updatedList1[index].title,
        ];
      }
    });
    setList1(updatedList1);
    setList2(updatedList2);
  };

  return (
    <div className="container">
      <h1>Swap the list Items</h1>
      <div className="swapList">
        <ul>
          {list1.map((item, index) => (
            <li key={index}>
              <input
                type="checkbox"
                // checked={item.checked}
                onChange={() => handleCheckBoxClick(index)}
              />
              {item.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="swapList">
        <ul>
          {list2.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))}
        </ul>
      </div>
      <button onClick={handleSwapList}>Swap Items</button>
    </div>
  );
};

export default SwapListItems;
