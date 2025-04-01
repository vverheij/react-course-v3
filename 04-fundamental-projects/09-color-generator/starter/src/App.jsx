import { useState } from 'react';
import Values from 'values.js';
import ColorList from './ColorList';
import Form from './Form';
import { ToastContainer, toast } from 'react-toastify';
import INCREMENTS from './utils';
const App = () => {
  const [colors, setColors] = useState(new Values('#f15025').all(INCREMENTS));
  const addColor = (hex) => {
    try {
      const newColors = new Values(hex).all(INCREMENTS);
      setColors(newColors);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <main>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
      <ToastContainer position="top-center" />
    </main>
  );
};
export default App;
