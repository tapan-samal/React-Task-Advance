//Nested file/folder structure
//Expand and collapse folder
//Add/remove file/folder

import React, { useState } from "react";
import RenderList from "./components/RenderList";
import json from "./components/data.json";
import "./explorer.css";

const FileExplorer = () => {
  const [data, setData] = useState(json);

  const generateId = Date.now().toString();

  const addNodeToList = (parentId) => {
    const nodeName = prompt("Enter file or folder name!");
    if (!nodeName) return;

    const isFile = nodeName.includes(".");

    const updateTree = (list) =>
      list.map((node) => {
        if (node.id === parentId) {
          return {
            ...node,
            children: [
              ...node.children,
              {
                id: generateId,
                name: nodeName,
                isFolder: !isFile,
                children: isFile ? undefined : [],
              },
            ],
          };
        }
        if (node.children) {
          return { ...node, children: updateTree(node.children) };
        }
        return node;
      });

    setData((prev) => updateTree(prev));
  };

  const deleteNodeFromList = (itemId) => {
    const updateTree = (list) =>
      list
        .filter((node) => node.id !== itemId)
        .map((node) => ({
          ...node,
          children: node.children ? updateTree(node.children) : [],
        }));

    setData((prev) => updateTree(prev));
  };

  return (
    <div>
      <h1> File/Folder Explorer</h1>
      <RenderList
        list={data}
        addNodeToList={addNodeToList}
        deleteNodeFromList={deleteNodeFromList}
      />
    </div>
  );
};

export default FileExplorer;
