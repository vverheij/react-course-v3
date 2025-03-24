import { useState } from 'react';

const ErrorExample = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    console.log(count);
    setCount(() => count + 1);
  };
  return (
    <>
      <h4>You clicked {count} times</h4>
      <button type="button" className="btn" onClick={handleClick}>
        Click Me
      </button>
    </>
  );
};

export default ErrorExample;

// create count variable
// - display value in the JSX
// - add button and increase the value
// - the reason for bug - we don't trigger re-render (reference next lecture)
