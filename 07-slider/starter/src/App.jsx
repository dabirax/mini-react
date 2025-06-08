import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import { useState } from "react";
import { list, longList, shortList } from "./data";

const App = () => {
  const [people, setPeople] = useState(list);
  const [index, setIndex] = useState(0);

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

          let position = "next-slide";
          if (personIndex === index) {
            position = "active-slide";
          }
          if (personIndex === index-1 || ( index === 0 && personIndex === people.length-1)) {
            position = "last-slide";
          }
          console.log(people.length);

          return (
            <article key={id} className={position}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon"></FaQuoteRight>
            </article>
          );
        })}
        <button className="prev">
          <FiChevronLeft />
        </button>
        <button className="next">
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
};
export default App;
