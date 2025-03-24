import { data } from './../../../data';
import { useState } from 'react';
const UseStateArray = () => {
  console.log(data);
  const [people, setPeople] = useState(data);
  const removeItem = (id) => {
    setPeople(() => {
      return people.filter((person) => person.id !== id);
    });
  };
  const clearAll = (id) => {
    setPeople([]);
  };
  return (
    <div>
      <ul>
        {people.map((person) => {
          return (
            <li key={person.id}>
              <h2>{person.name}</h2>
              <button className="btn" type="button" onClick={() => removeItem(person.id)}>
                Remove
              </button>
            </li>
          );
        })}
      </ul>
      <button className="btn" type="button" onClick={clearAll}>
        remove all
      </button>
    </div>
  );
};

export default UseStateArray;
