import React from "react";
import { BsPencilSquare } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";

const Item = ({ taskText, handleDelete, handleUpdate }) => {
  return (
    <div className="item">
      <div className="para">
        <p>{taskText}</p>
      </div>
      <div className="icons">
        <span className="update-icon" onClick={handleUpdate}>
          <BsPencilSquare />
        </span>
        <span className="delete-icon" onClick={handleDelete}>
          <AiOutlineDelete />
        </span>
      </div>
    </div>
  );
};

export default Item;
