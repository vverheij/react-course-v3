import { useState } from 'react';

const UseStateObject = () => {
  // const [name, setName] = useState('Victor');
  // const [age, setAge] = useState(2025 - 1967);
  // const [hobby, setHobby] = useState('Piano');
  const [person, setPerson] = useState({
    name: 'Victor',
    age: 58,
    hobby: 'Piano',
  });

  const updatePerson = () => {
    setPerson({ ...person, hobby: 'Motor' });
  };
  const { name, age, hobby } = person;
  return (
    <div>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h4>{hobby}</h4>
      <button type="button" className="btn" onClick={updatePerson}>
        Update
      </button>
    </div>
  );
};

export default UseStateObject;

// - setup three state values
//   - name(string)
//   - age(number)
//   - hobby(string)
// - render in the browser
// - create a button
//   - setup a function
//     - update all three state values
// - as a result once the user clicks the button,
//   new person is displayed in the browser
