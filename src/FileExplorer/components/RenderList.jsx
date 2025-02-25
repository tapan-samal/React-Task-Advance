import React, { useState } from "react";

const RenderList = ({ list, addNodeToList, deleteNodeFromList }) => {
  const [isExpanded, setIsExpanded] = useState({});

  const handleToggleExtend = (id) => {
    setIsExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="render-list">
      {list.map((node) => {
        const isFile = node.name.includes(".");

        return (
          <div key={node.id} className="node-item">
            {!isFile && (
              <span
                className="plus-minus"
                onClick={() => handleToggleExtend(node.id)}
              >
                {isExpanded[node.id] ? "📂" : "📁"}
              </span>
            )}

            <span>
              {isFile ? "📄" : ""} {node.name}
            </span>

            <span
              className="add-delete"
              onClick={() => deleteNodeFromList(node.id)}
            >
              ❌
            </span>

            {!isFile && (
              <>
                <span
                  className="add-delete"
                  onClick={() => addNodeToList(node.id)}
                >
                  ➕
                </span>
              </>
            )}

            {/* Render children if it's a folder and expanded */}
            {!isFile && isExpanded[node.id] && node.children?.length > 0 && (
              <RenderList
                list={node.children}
                addNodeToList={addNodeToList}
                deleteNodeFromList={deleteNodeFromList}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default RenderList;
