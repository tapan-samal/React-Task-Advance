import React, { useEffect, useState } from "react";
import "./drop-drag.css";
//✏️ 🗑️

const DragAndDrop = () => {
  const TODO = "TODO";
  const DOING = "DOING";
  const DONE = "DONE";
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });
  const [dragTask, setDragTask] = useState(null);
  const [updateItem, setUpdateItem] = useState(null);

  //Set to local storage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleKeyDown = (e) => {
    // console.log(e.keyCode);
    if (e.keyCode === 13 && value.length > 0) {
      //press enter
      if (updateItem) {
        const updatedObj = {
          title: value,
          id: updateItem.id,
          status: updateItem.status,
        };
        const copyTask = [...tasks];
        const filterList = copyTask.filter((item) => item.id !== updateItem.id);
        setTasks((prevTasks) => [...filterList, updatedObj]);
        setUpdateItem(null);
      } else {
        const newObj = {
          title: value,
          status: TODO,
          id: Date.now(), //For unique id
        };
        setTasks((prevTasks) => [...prevTasks, newObj]);
      }
      setValue("");
    }
  };
  // console.log(dragTask);

  const handleDragAndDrop = (status) => {
    let copyTask = [...tasks];
    copyTask = copyTask.map((item) => {
      if (dragTask.id === item.id) {
        item.status = status;
      }
      return item;
    });
    setTasks(copyTask);
    setDragTask(null);
  };

  const handleOnDrop = (e) => {
    const status = e.target.getAttribute("data-status");
    if (status === TODO) {
      handleDragAndDrop(TODO);
    } else if (status === DOING) {
      handleDragAndDrop(DOING);
    } else if (status === DONE) {
      handleDragAndDrop(DONE);
    }
    // console.log("Dropping", status);
  };

  const handleDeleteTask = (task) => {
    let copyTask = [...tasks];
    copyTask = copyTask.filter((item) => item.id !== task.id);
    setTasks(copyTask);
  };

  const handleUpdateTask = (task) => {
    setUpdateItem(task);
    setValue(task.title);
  };
  // console.log("Update: ", updateItem);

  return (
    <div className="main">
      <h1>Task Manager</h1>
      <input
        onChange={(e) => setValue(e.target.value)}
        type="text"
        value={value}
        onKeyDown={handleKeyDown}
      />
      <div className="board">
        <div
          className="todo"
          onDrop={handleOnDrop}
          onDragOver={(e) => e.preventDefault()}
          data-status={TODO}
        >
          <h2>Todo</h2>
          {tasks.length > 0 &&
            tasks.map(
              (task) =>
                task.status === TODO && (
                  <div
                    onDrag={() => setDragTask(task)}
                    draggable
                    key={task.id}
                    className="task-item"
                  >
                    {task.title}
                    <div className="btns">
                      <span onClick={(e) => handleUpdateTask(task)}>✏️</span>
                      <span onClick={(e) => handleDeleteTask(task)}>🗑️</span>
                    </div>
                  </div>
                )
            )}
        </div>
        <div
          className="doing"
          onDrop={handleOnDrop}
          onDragOver={(e) => e.preventDefault()}
          data-status={DOING}
        >
          <h2>Doing</h2>
          {tasks.length > 0 &&
            tasks.map(
              (task) =>
                task.status === DOING && (
                  <div
                    onDrag={() => setDragTask(task)}
                    draggable
                    key={task.id}
                    className="task-item"
                  >
                    {task.title}
                    <div className="btns">
                      <span onClick={(e) => handleUpdateTask(task)}>✏️</span>
                      <span onClick={(e) => handleDeleteTask(task)}>🗑️</span>
                    </div>
                  </div>
                )
            )}
        </div>
        <div
          className="done"
          onDrop={handleOnDrop}
          onDragOver={(e) => e.preventDefault()}
          data-status={DONE}
        >
          <h2>Done</h2>
          {tasks.length > 0 &&
            tasks.map(
              (task) =>
                task.status === DONE && (
                  <div
                    onDrag={() => setDragTask(task)}
                    draggable
                    key={task.id}
                    className="task-item"
                  >
                    {task.title}
                    <div className="btns">
                      <span onClick={(e) => handleUpdateTask(task)}>✏️</span>
                      <span onClick={(e) => handleDeleteTask(task)}>🗑️</span>
                    </div>
                  </div>
                )
            )}
        </div>
      </div>
    </div>
  );
};

export default DragAndDrop;
