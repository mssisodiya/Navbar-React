import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const api = "https://jsonplaceholder.typicode.com/users";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    const { data: users } = await axios.get(api);
    console.log(users);
    setUsers(users);
  }

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li>
            <Link to={`albums/${user.id}`} key={user.id}>
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
