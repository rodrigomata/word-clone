import React from "react";

function AddItem({ items, setItem }) {
  const [guess, setGuess] = React.useState('')

  function onSubmit(event) {
    event.preventDefault()
    const nextItem = [...items, guess]
    setItem(nextItem)
    setGuess('')
  }
  return (
    <form className="guess-input-wrapper" onSubmit={onSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" value={guess} onChange={event => setGuess(event.target.value)} minLength={5} maxLength={5} />
    </form>
  );
}

export default AddItem;
