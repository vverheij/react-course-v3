import { useGlobalContext } from './context';
import Hero from './Hero';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Submenu from './SubmenU';

const App = () => {
  const { isSidebarOpen, openSidebar, closeSidebar } = useGlobalContext();
  return (
    <main>
      <Navbar />
      <Hero />
      <Sidebar />
      <Submenu />
    </main>
  );
};
export default App;
