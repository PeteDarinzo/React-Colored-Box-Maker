import React from "react";
import "./Box.css"


const Box = ({ height, width, color, id, deleteBox }) => {

  const handleDeleteBox = (e) => {
    e.preventDefault();
    deleteBox(e.target.id)
  }

  return (
    <div className="Box-container">
      <div
        className="Box"
        style={{ height: `${height}px`, width: `${width}px`, backgroundColor: `${color}` }}
        data-testid={color} />
      <button
        className=".Box-delete"
        id={id}
        onClick={handleDeleteBox}>X</button>
    </div>
  );
}

export default Box;

