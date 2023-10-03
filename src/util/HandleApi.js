import axios from "axios";

const BASE_URL = "https://react-tsask-app-backend.onrender.com";

const getAllTasks = (setTaskArr) => {
  axios
    .get(`${BASE_URL}/api/`)
    .then(({ data }) => {
      setTaskArr(data);
    })
    .catch((err) => console.log(err));
};

const addTask = (text, setText, setTaskArr) => {
  axios
    .post(`${BASE_URL}/api/add`, { task: text })
    .then((data) => {
      setText("");
      getAllTasks(setTaskArr);
      //setTaskArr(data)
    })
    .catch((err) => console.log(err));
};

const updateTask = (id, text, setTaskArr, setText, setIsEdit) => {
  axios
    .post(`${BASE_URL}/api/update`, { id, text })
    .then((data) => {
      setText("");
      setIsEdit(false);
      getAllTasks(setTaskArr);
      //setTaskArr(data)
    })
    .catch((err) => console.log(err));
};

const deleteTask = (id, setTaskArr) => {
  axios
    .post(`${BASE_URL}/api/delete`, { id })
    .then((data) => {
      getAllTasks(setTaskArr);
      //setTaskArr(data)
    })
    .catch((err) => console.log(err));
};

export { getAllTasks, addTask, updateTask, deleteTask };
