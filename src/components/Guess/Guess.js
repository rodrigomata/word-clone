import React from "react";

import { checkGuess } from '../../game-helpers'
import { range } from '../../utils';

function Guess({ guess, answer }) {
  const check = checkGuess(guess, answer) || range(0, 5)

  return (
    <p className="guess">
      {check.map(({ letter, status = '' }, index) => {
        return <span key={index} className={`cell ${status}`}>{letter || ''}</span>;
      })}
    </p>
  );
}

export default Guess;
