import { useState } from 'react';
import { toast } from 'react-toastify';

const Form = ({ addItem }) => {
  const [itemName, setItemName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!itemName) {
      toast.error('Please provide a value');
      return;
    }

    addItem(itemName);
    setItemName('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4 className="title">Grocery Bud</h4>
      <div className="form-control">
        <input
          className="form-input"
          type="text"
          name="item"
          id="item"
          value={itemName}
          onChange={(event) => setItemName(event.target.value)}
        />
        <button className="btn" type="submit">
          Add Item
        </button>
      </div>
    </form>
  );
};
export default Form;
