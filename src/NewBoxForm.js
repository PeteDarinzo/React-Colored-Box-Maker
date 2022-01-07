import React, { useState } from "react";
import "./NewBoxForm.css"

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
    <form className="NewBoxForm" onSubmit={handleSubmit}>
      <label htmlFor="height" className="NewBoxForm-label">Height (pixels)</label>
      <input
        id="height"
        type="number"
        name="height"
        className="NewBoxForm-input"
        min="50"
        max="200"
        value={formData.height}
        onChange={handleChange}
      />
      <label htmlFor="width" className="NewBoxForm-label">Width (pixels)</label>
      <input
        id="width"
        type="number"
        name="width"
        className="NewBoxForm-input"
        min="50"
        max="200"
        value={formData.width}
        onChange={handleChange}
      />
      <label htmlFor="color" className="NewBoxForm-label">Color</label>
      <input
        id="color"
        type="color"
        name="color"
        className="NewBoxForm-input"
        value={formData.color}
        onChange={handleChange}
      />
      <button className="NewBoxForm-button">Add Box</button>
    </form>
  );
}

export default NewBoxForm;