import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from "uuid";


const BoxList = () => {

  const [boxes, setBoxes] = useState([]);

  const addBox = (newBox) => {
    setBoxes(boxes => [...boxes, { ...newBox, id: uuid() }]);
  }

  const deleteBox = (id) => {
    setBoxes(boxes => {
      return boxes.filter(box => box.id !== id);
    });
  }

  return (
    <div>
      <h2>Colored Box Generator</h2>
      <NewBoxForm addBox={addBox} />
      <div>
        {boxes.map(({ height, width, color, id }) =>
          <Box
            height={height}
            width={width}
            color={color}
            key={id}
            id={id}
            deleteBox={deleteBox} />)}
      </div>
    </div>
  );
}

export default BoxList;