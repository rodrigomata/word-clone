import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED} from '../../constants'

import AddItem from "../AddItem";
import ItemList from "../ItemList";
import Banner from '../Banner'

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [items, setItem] = React.useState([]);
  const [condition, setCondition] = React.useState('');

  function updateItem(value) {
    setItem(value)
    const winCondition = value[value.length - 1].toUpperCase() === answer.toUpperCase()
    console.log('win', winCondition)
    if (items.length + 1 === NUM_OF_GUESSES_ALLOWED && !winCondition) {
      setCondition('lost')
    } else if (winCondition && items.length <= NUM_OF_GUESSES_ALLOWED) {
      setCondition('win')
    }
  }

  return (
    <>
      <Banner condition={condition} guesses={items.length} answer={answer} />
      <ItemList items={items} answer={answer} />
      <AddItem items={items} setItem={updateItem} />
    </>
  );
}

export default Game;
