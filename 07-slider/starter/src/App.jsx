import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import { useState } from "react";
import {list, longList, shortList} from "./data";

const App = () => {
  const [people, setPeople] = useState(list);
  const [index, setIndex] = useState(2);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span> Reviews
        </h2>
      </div>
      <div className="slider-container">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;

          return (
            <article key={id} className="slide">
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon"></FaQuoteRight>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default App;
