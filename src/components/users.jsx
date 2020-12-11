import React, { Component } from "react";
import axios from "axios";

const api = "https://jsonplaceholder.typicode.com/users";

class Users extends Component {
  state = {
    users: [],
  };

  componentDidMount = async () => {
    const { data: users } = await axios.get(api);
    this.setState({ users });
  };

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.address.street}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Users;
