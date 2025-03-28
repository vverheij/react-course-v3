import { useState, useEffect } from 'react';
const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    console.log('in useEffect of Parent Component');
  }, []);
  console.log('in Parent Component');
  return (
    <div>
      <h1>Cleanup function</h1>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        Toggle
      </button>
      {toggle && <RandomComponent />}
    </div>
  );
};

const RandomComponent = () => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log('in useEffect of RandomComponent');
    }, 1000);
    return () => {
      clearInterval(intervalId);
      console.log('Cleanup');
    };
  }, []);
  return <h2>Hello There</h2>;
};
export default CleanupFunction;
