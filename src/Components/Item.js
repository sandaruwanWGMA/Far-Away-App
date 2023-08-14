import React, { useState } from "react";
import "../Styles/Item.css";

function Item({ item, quantity, packed, id, setPacked, handleSetItems }) {
  const [checked, seChecked] = useState(false);

  return (
    <div className="item">
      <input
        className="checkbox"
        type="checkbox"
        checked={checked}
        onChange={() => {
          seChecked(!checked);
          setPacked(id, checked);
        }}
      ></input>
      <p style={{ textDecoration: packed ? "line-through" : "none" }}>
        {quantity} {item}{" "}
        <button onClick={() => handleSetItems(item)} className="close-btn">
          ❌
        </button>
      </p>
    </div>
  );
}

export default Item;
