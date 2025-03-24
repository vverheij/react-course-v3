import { useState } from 'react';

const UseStateGotcha = () => {
  const [counter, setCounter] = useState(0);

  const updateCounter = () => {
    setCounter((currentState) => currentState + 1);
    // setTimeout(() => {
    //   setCounter((currentState) => {
    //     console.log('inside setTimeout: ', currentState);
    //     return currentState + 1;
    //   }, 3000);
    // });
  };

  return (
    <div>
      <h3>{counter}</h3>
      <button className="btn" onClick={updateCounter}>
        Increase
      </button>
    </div>
  );
};

export default UseStateGotcha;
