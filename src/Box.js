import React from "react";
import "./Box.css"


const Box = ({ height, width, color, id, deleteBox }) => {

  const handleDeleteBox = (e) => {
    e.preventDefault();
    deleteBox(e.target.id)
  }

  return (
    <div className="Box-container">
      <div className="Box" style={{ height: `${height}px`, width: `${width}px`, backgroundColor: `${color}` }} />
      <button className=".Box-delete" onClick={handleDeleteBox} id={id}>X</button>
    </div>
  );
}

export default Box;

//`rgb${color}`