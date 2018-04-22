import React from "react";
import "./inputForm.css";
export default function InputForm(props) {
  const handleSubmit = e => {
    e.preventDefault();
    let value = document.getElementById("guess").value;
    document.getElementById("guess").value = "";
    props.onChange(parseInt(value, 10));
  };
  if (!props.finished) {
    return (
      <section>
        <form action="#!" className="form" onSubmit={handleSubmit}>
          <input name="guess" id="guess" className="guessBox" type="number" />
          <button type="submit">Guess #{props.count + 1}</button>
        </form>
      </section>
    );
  } else {
    return (
      <section className="finalSentence">
        <h3>
          You found the correct answer in{" "}
          <span className="bigNumber">{props.count}</span> guesses
        </h3>
      </section>
    );
  }
}
