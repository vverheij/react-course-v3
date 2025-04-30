import { ToastContainer } from 'react-toastify';
import { nanoid } from 'nanoid';
import Form from './Form';
import Items from './Items';
import { useState } from 'react';
import customFetch from './utils';
import { useEffect } from 'react';

const defaultItems = [
  { id: nanoid(), title: 'walk the dog', isDone: false },
  { id: nanoid(), title: 'wash dishes', isDone: false },
  { id: nanoid(), title: 'drink coffee', isDone: true },
  { id: nanoid(), title: 'take a nap', isDone: false },
];

const App = () => {
  // const [items, setItems] = useState(defaultItems);
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    try {
      const response = await customFetch.get();
      const { taskList } = response.data;
      return taskList;
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      const tasks = await fetchItems();
      // setItems(tasks);
    };
    fetchData();
  }, []);
  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form />
      {/* <Items items={items} /> */}
      <Items />
    </section>
  );
};
export default App;
