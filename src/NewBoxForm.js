import React, { useState } from "react";


const NewBoxForm = ({ addBox }) => {
  const initialState = {
    height: 50,
    width: 50,
    color: "#000000"
  }

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({ ...formData });
    setFormData(initialState); // reset form inputs to default
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="height">Height</label>
      <input
        id="height"
        type="number"
        name="height"
        min="50"
        max="200"
        value={formData.height}
        onChange={handleChange}
      />
      <label htmlFor="width">Width</label>
      <input
        id="width"
        type="number"
        name="width"
        min="50"
        max="200"
        value={formData.width}
        onChange={handleChange}
      />
      <label htmlFor="color">Color</label>
      <input
        id="color"
        type="color"
        name="color"
        value={formData.color}
        onChange={handleChange}
      />
      <button>Add Box</button>
    </form>
  )
}

export default NewBoxForm;