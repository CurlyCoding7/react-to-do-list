import React, { useEffect, useState } from "react";
import "../styles/home.css";
import Item from "./Item";
import {
  getAllTasks,
  addTask,
  updateTask,
  deleteTask
} from "../util/HandleApi";

const Home = () => {
  const [taskArr, setTaskArr] = useState([]);
  const [text, setText] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [taskId, setTaskId] = useState("");

  useEffect(() => {
    getAllTasks(setTaskArr); // Fetch tasks when the component mounts
  }, []);

  const handleUpdate = (id, text) => {
    setIsEdit(true);
    setText(text);
    setTaskId(id);
  };

  return (
    <div className="container">
      <div className="list-box">
        <h1>What to do today?</h1>
        <input
          className="input-field"
          type="text"
          placeholder="Write here"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="btn-add"
          onClick={
            isEdit
              ? () => updateTask(taskId, text, setTaskArr, setText, setIsEdit)
              : () => addTask(text, setText, setTaskArr)
          }
        >
          {isEdit ? "Update" : "Add"}
        </button>
        <div className="items-box">
          {taskArr.length > 0 ? (
            taskArr.map((item, i) => (
              <Item
                key={i}
                taskText={item.task}
                id={item._id}
                handleUpdate={() => handleUpdate(item._id, item.task)}
                handleDelete={() => deleteTask(item._id, setTaskArr)}
              />
            ))
          ) : (
            <p className="empty-task">No tasks available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
