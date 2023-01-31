import React from "react";

function ItemList({ items }) {
  return (
    <div className="guess-results">
      {items.map((item, index) => (
        <p key={index} className="guess">
          {item}
        </p>
      ))}
    </div>
  );
}

export default ItemList;
