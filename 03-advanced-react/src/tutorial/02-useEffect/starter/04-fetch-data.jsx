const url = 'https://api.github.com/users';
import { useState, useEffect } from 'react';

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setUsers(result);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUsers();
  }, []);
  return (
    <section>
      <h3>Github Users</h3>
      <ul className="users">
        {users.map((user) => {
          return (
            <li key={user.node_id}>
              <ul className="users"></ul>
              <img src={user.avatar_url} alt={user.login} style={{ width: 50 }} />
              <div>
                <h5>{user.login} </h5>
                <a href={user.url} target="_blank">
                  profile
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default FetchData;
