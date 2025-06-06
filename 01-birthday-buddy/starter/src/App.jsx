import { useState } from "react";
import List from "./List";
import data from "./data";

const App = () => {
  const [people, setPeople] = useState(data)
  return (
    <main>
      <section>
        <h3> ${people.length} birthdays today</h3>
        <List people = {people} />
        <button onClick={()=> setPeople([])}>Clear All</button>
      </section>
    </main>
  );
};
export default App;
