import React from "react";

const Item = ({ taskText, arr, index, handleDelete }) => {
  return (
    <div className="item">
      <p>{taskText}</p>
      <span onClick={() => handleDelete(index)}>X</span>
    </div>
  );
};

export default Item;
