import { useState, createContext } from 'react';
import NavLinks from './NavLinks';
import { useContext } from 'react';

// normal setup, imported in consumer, to be used as param in useContext
export const NavbarContext = createContext();

// custom hook
export const useAppContext = () => useContext(NavbarContext);

const Navbar = () => {
  const [user, setUser] = useState({ name: 'something' });
  const logout = () => {
    setUser(null);
  };
  return (
    <NavbarContext.Provider value={{ user, logout }}>
      <nav className="navbar">
        <h5>CONTEXT API</h5>
        <NavLinks />
      </nav>
    </NavbarContext.Provider>
  );
};
export default Navbar;
