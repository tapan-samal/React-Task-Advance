import React from "react";

const DynamicNestedList = () => {
  const lists = [
    {
      name: "item1",
      subLists: [
        {
          name: "sub-item1",
          subSubLists: [{ name: "sub-sub-item1" }, { name: "sub-sub-item2" }],
        },
        {
          name: "sub-item2",
          subSubLists: [{ name: "sub-sub-item1" }],
        },
      ],
    },
    {
      name: "item2",
      subLists: [
        {
          name: "sub-item1",
          subSubLists: [
            { name: "sub-sub-item1" },
            { name: "sub-sub-item2" },
            { name: "sub-sub-item3" },
          ],
        },
        {
          name: "sub-item2",
        },
        {
          name: "sub-item3",
          subSubLists: [{ name: "sub-sub-item1" }],
        },
      ],
    },
    {
      name: "item3",
    },
  ];

  return (
    <>
      <h2>Dynamic Nested List:</h2>
      {lists.map((list, index) => (
        <div key={index}>
          <h3>List: {list.name}</h3>
          {list.subLists  && (
            <ul>
              {list.subLists.map((subList, subListIndex) => 
                  <ul key={subListIndex}>
                    <li>
                      SubList: {subList.name}
                      {subList.subSubLists  && (
                        <ul>
                          {subList.subSubLists.map(
                            (subSubList, subSubListIndex) => (
                              <li key={subSubListIndex}>
                                SubSubList: {subSubList.name}
                              </li>
                            )
                          )}
                        </ul>
                      )}
                    </li>
                  </ul>
              )}
            </ul>
          )}
        </div>
      ))}
    </>
  );
};

export default DynamicNestedList;
