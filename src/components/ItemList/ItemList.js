import React from "react";

import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

import Guess from '../Guess'

function ItemList({ items }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((_row, rowIndex) => {
        return (
          <Guess key={rowIndex} items={items[rowIndex]}></Guess>
        );
      })}
    </div>
  );
}

export default ItemList;
