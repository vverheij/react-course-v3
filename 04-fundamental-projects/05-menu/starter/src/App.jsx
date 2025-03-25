import Title from './Title';
import menu from './data';
import Menu from './Menu';
import Categories from './Categories';
import { useState } from 'react';

const allCategories = ['all', ...new Set(menu.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  const filterOnCategory = (category) => {
    if (category === 'all') {
      setMenuItems(menu);
      return;
    }
    setMenuItems(menu.filter((item) => item.category === category));
  };
  return (
    <main>
      <section className="menu">
        <Title text="Our Menu" />
        <Categories categories={categories} filterOnCategory={filterOnCategory} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};
export default App;
