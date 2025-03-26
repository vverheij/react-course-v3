import { useState } from 'react';
import { shortList, list, longList } from './data';

const App = () => {
  const [carousel, setCarousel] = useState(shortList);
  console.log(shortList);
  console.log(carousel);

  return (
    <main>
      <h2>Slider Starter</h2>
    </main>
  );
};
export default App;
