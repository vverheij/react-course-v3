import { useState } from 'react';
import { data } from './../../../data';
import { useEffect } from 'react';
const UserChallenge = () => {
  const [users, setUsers] = useState(data);
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      return;
    }

    setUsers([...users, { id: Date.now(), name }]);
    setName('');
  };
  const removeUser = (id) => {
    setUsers((users) => users.filter((user) => user.id !== id));
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input type="text" className="form-input" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {/* render users below */}
      <h4>Users</h4>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h4>{user.name}</h4>
            <button className="btn" onClick={(e) => removeUser(user.id)}>
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default UserChallenge;
