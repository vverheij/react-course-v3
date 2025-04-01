import { useState } from 'react';
import Form from './Form';
import Items from './Items';
import { ToastContainer, toast } from 'react-toastify';
import { nanoid } from 'nanoid';

const defaultList = JSON.parse(localStorage.getItem('list') || '[]');

const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items));
};

const App = () => {
  const [items, setItems] = useState(defaultList);

  const addItem = (itemName) => {
    const newItem = { id: nanoid(), name: itemName, completed: false };
    try {
      const newItems = [...items, newItem];
      setItems(newItems);
      setLocalStorage(newItems);
      toast.success('Item added to the list');
    } catch (error) {
      console.log(error);
      toast.error('Oops, there was an error!');
    }
  };

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('Item successfully removed from the list');
  };

  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };

  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
    </section>
  );
};

export default App;
