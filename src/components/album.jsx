import React, { Component } from "react";
import axios from "axios";

const api = "https://jsonplaceholder.typicode.com/albums";

class Albums extends Component {
  state = {
    albums: [],
  };

  componentDidMount = async () => {
    const { data: albums } = await axios.get(api);
    console.log(albums);
    this.setState({ albums });
  };

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {this.state.albums.map((album) => (
              <tr key={album.id}>
                <td>{album.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Albums;
