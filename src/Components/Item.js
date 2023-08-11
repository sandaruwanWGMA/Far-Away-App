import React from "react";
import "../Styles/Item.css";

function Item({ item, quantity, handleSetItems }) {
  return (
    <div className="item">
      <p className="quantity">{quantity} </p>
      <p>
        {item}{" "}
        <button onClick={() => handleSetItems(item)} className="close-btn">
          ❌
        </button>
      </p>
    </div>
  );
}

export default Item;
