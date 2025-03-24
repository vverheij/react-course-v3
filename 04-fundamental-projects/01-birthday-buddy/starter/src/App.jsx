import data from './data';

import List from './components/List';
import { useState } from 'react';
const App = () => {
  const [people, setPeople] = useState(data);

  const remove = (id) => {
    console.log('removing', id);
    setPeople((prevPeople) => prevPeople.filter((p) => p.id !== id));
  };
  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays Today</h3>
        <List people={people} remove={remove} />
        <button type="button" onClick={() => setPeople([])} className="btn btn-block">
          Clear List
        </button>
      </section>
    </main>
  );
};
export default App;
