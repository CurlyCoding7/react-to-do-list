import React, { useEffect } from "react";
import "../styles/home.css";
import { useState } from "react";
import Item from "./Item";

const Home = () => {
  const initialArr = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];

  const [taskArr, setTaskArr] = useState(initialArr);
  const [task, setTask] = useState("");

  function handleChange(e) {
    e.target.value !== ""
      ? setTask(e.target.value)
      : alert("task can not be empty");
  }

  function handleAdd(e) {
    e.preventDefault();
    setTaskArr([...taskArr, task]);
    setTask("");
  }

  function handleDelete(index) {
    const filterdArr = taskArr.filter((val, i) => {
      return i !== index;
    });
    setTaskArr(filterdArr);
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskArr));
  }, [taskArr]);

  return (
    <div className="container">
      <div className="list-box">
        <h1>What to do today?</h1>
        <input
          className="input-field"
          type="text"
          placeholder="write here"
          value={task}
          onChange={(e) => handleChange(e)}
        />
        <button className="btn-add" onClick={handleAdd}>
          Add
        </button>
        <div className="items-box">
          {taskArr.length !== 0 &&
            taskArr.map((task, index) => (
              <Item
                key={index}
                taskText={task}
                arr={taskArr}
                index={index}
                handleDelete={handleDelete}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
