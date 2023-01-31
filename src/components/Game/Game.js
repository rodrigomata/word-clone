import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import AddItem from "../AddItem";
import ItemList from "../ItemList";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [items, setItem] = React.useState([]);

  return (
    <>
      <ItemList items={items} />
      <AddItem items={items} setItem={setItem} />
    </>
  );
}

export default Game;
