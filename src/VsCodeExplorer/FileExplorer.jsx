import React, { useState } from "react";
import { useTraverseTree } from "./components/CustomHook"; // Adjust the path here
import Folder from "./components/FolderData";
import {explorer} from "./components/FolderData"; // Assuming this is the default export
import "./components/explorer.css";

const VsFileExplorer = () => {
  const [explorerData, setExplorerData] = useState(explorer);
  const { insertNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
    console.log(finalTree);
  };

  return (
    <div className="App">
      <Folder handleInsertNode={handleInsertNode} explorer={explorerData} />
    </div>
  );
}

export default VsFileExplorer;
