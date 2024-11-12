export const useTraverseTree = () => {
  function insertNode(tree, folderId, item, isFolder) {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(), // You can use uuid library for unique IDs
        name: item,
        isFolder,
        items: [],
      });
    }

    const latestNode = tree.items.map((obj) => {
      return insertNode(obj, folderId, item, isFolder);
    });

    return { ...tree, items: latestNode };
  }

  return { insertNode };
};

  //tree-> complete tree
  //folderId-> where we insert the new file or folder
  //item-> new item to be created
  //isFolder-> what type of item to be creted