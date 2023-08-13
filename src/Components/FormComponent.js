import React, { useState } from "react";
import "../Styles/Form.css";

let ID = 1;

function FormComponent({ onAddItems }) {
  const [quantity, setQuantity] = useState(1);
  const [item, setItem] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    onAddItems({ id: ID, item, quantity, packed: false });
    setQuantity(1);
    setItem("");
    ID += 1;
  };

  return (
    <div className="form-container">
      <h1>What do you need for your trip?</h1>
      <form onSubmit={onSubmit}>
        <select
          className="option-select"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        >
          {Array.from({ length: 20 }, (_, index) => index + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          className="selector"
          placeholder="Item..."
          value={item}
          onChange={(e) => setItem(e.target.value)}
        ></input>
        <button className="class-btn">Add</button>
      </form>
    </div>
  );
}

export default FormComponent;
