// import { NavbarContext } from './Navbar';
// import { useContext } from 'react';

import { useAppContext } from './Navbar';
const UserContainer = () => {
  // const value = useContext(NavbarContext);
  const value = useAppContext();
  console.log(value);
  const { user, logout } = value;
  if (typeof user === 'undefined' || !user) {
    return (
      <div className="user-container">
        <p>Please Login</p>
      </div>
    );
  }

  return (
    <div className="user-container">
      <p>Hello There, {user?.name?.toUpperCase()}</p>
      <button type="button" className="btn" onClick={logout}>
        Logout
      </button>
    </div>
  );
};
export default UserContainer;
