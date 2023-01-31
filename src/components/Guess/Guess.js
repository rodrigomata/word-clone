import React from "react";

import { range } from "../../utils";

function Guess({ items = [] }) {
  return (
    <p className="guess">
      {range(0, 5).map((_column, columnIndex) => {
        return <span key={columnIndex} className="cell">{items[columnIndex] || ''}</span>;
      })}
    </p>
  );
}

export default Guess;
