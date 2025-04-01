import { useEffect, useRef, useState } from 'react';

const UseRefBasics = () => {
  const [value, setValue] = useState(0);
  const refContainer = useRef(null);
  const isMounted = useRef(false);

  console.log(refContainer);
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = refContainer.current.value;
    console.log(name);
  };

  useEffect(() => {
    refContainer.current.focus();
  });
  useEffect(() => {
    console.log(refContainer);
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    console.log('this does not run on initial render,  but will run after after every value change');
  }, [value]);

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name!
          </label>
          <input type="text" ref={refContainer} id="name" className="form-input" />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      <h1>value : {value}</h1>
      <button onClick={() => setValue(value + 1)} className="btn">
        increase
      </button>
    </div>
  );
};

export default UseRefBasics;
