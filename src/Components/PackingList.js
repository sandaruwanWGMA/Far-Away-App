import React from "react";
import Item from "./Item";
import "../Styles/Packing.css";

function PackingList({ itemsList, handleSetItems }) {
  return (
    <div className="container-packing">
      <div className="container-packing-list">
        <h2>ADDED ITEMS</h2>

        <ul className="packing-list">
          {itemsList.map((element) => (
            <Item
              item={element.item}
              quantity={element.quantity}
              handleSetItems={handleSetItems}
            ></Item>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PackingList;
