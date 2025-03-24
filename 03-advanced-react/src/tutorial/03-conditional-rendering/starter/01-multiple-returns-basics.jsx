import { useEffect, useState } from 'react';

const MultipleReturnsBasics = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(() => !isLoading);
    }, 3000);
  }, [setIsLoading]);

  return <section>{isLoading ? <h2>Loading: {isLoading.toString()}...</h2> : <h1>Fully loaded</h1>}</section>;
};
export default MultipleReturnsBasics;
