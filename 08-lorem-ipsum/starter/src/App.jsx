import data from "./data";
import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);

    if (count < 0) {
      // setText([]);
      // return;
      amount = 1;
    }

    if (count > data.length) {
      // setText(data);
      // return;
      amount = 8;
    }

    setText(data.slice(0, amount));
    console.log("Text:" + data.length);
  };
  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form action="" className="lorem-form " onSubmit={handleSubmit}>
        <label htmlFor="amount">
          paragraphs:
          <input
            type="number"
            name="amount"
            id="amount"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
        </label>
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
};
export default App;
