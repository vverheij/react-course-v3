import { useState, useEffect } from 'react';
const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    console.log('in useEffect of Parent Component');
  }, []);
  return (
    <div>
      <h1>Event Listener</h1>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        Toggle
      </button>
      {toggle && <RandomComponent />}
    </div>
  );
};

const RandomComponent = () => {
  useEffect(() => {
    const someFunc = () => {
      console.log('hmm, this is interesting');
      // some logic here
    };
    window.addEventListener('scroll', someFunc);
    return () => window.removeEventListener('scroll', someFunc);
  }, []);
  return (
    <div>
      <h2>Hello There</h2>
    </div>
  );
};
export default CleanupFunction;
