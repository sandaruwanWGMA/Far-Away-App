import React, { useState } from "react";
import Item from "./Item";
import "../Styles/Packing.css";

function PackingList({ itemsList, setPacked, handleSetItems }) {
  const [selected, setSelected] = useState("input");
  let sortedItems;
  if (selected === "input") sortedItems = itemsList;

  if (selected === "discription")
    sortedItems = itemsList
      .slice()
      .sort((a, b) => a.item.localeCompare(b.item));

  if (selected === "packed")
    sortedItems = itemsList
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="container-packing">
      <div className="container-packing-list">
        <h2>ADDED ITEMS</h2>

        <ul className="packing-list">
          {sortedItems.map((element) => (
            <Item
              key={element.id}
              item={element.item}
              packed={element.packed}
              id={element.id}
              setPacked={setPacked}
              quantity={element.quantity}
              handleSetItems={handleSetItems}
            ></Item>
          ))}
        </ul>
        <select
          className="selector-sorting"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
        >
          <option value="input">SORT BY INPUT ORDER</option>
          <option value="discription">SORT BY ITEM</option>
          <option value="packed">SORT BY PACKED</option>
        </select>
      </div>
    </div>
  );
}

export default PackingList;
