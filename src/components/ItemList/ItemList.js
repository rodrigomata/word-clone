import React from "react";

import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

import Guess from '../Guess'

function ItemList({ items, answer }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((_row, rowIndex) => {
        return (
          <Guess key={rowIndex} guess={items[rowIndex]} answer={answer}></Guess>
        );
      })}
    </div>
  );
}

export default ItemList;
