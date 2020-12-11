import React, { Component } from "react";
import axios from "axios";

const api = "https://jsonplaceholder.typicode.com/photos";

class Photos extends Component {
  state = {
    photos: [],
  };

  componentDidMount = async () => {
    const { data: photos } = await axios.get(api);
    console.log(photos);
    this.setState({ photos });
  };

  render() {
    return (
      <div className="row">
        {this.state.photos.map((photo) => (
          <div key={photo.id} className="col-6 col-md-3">
            <img className="card-img-top" src={photo.url} />
          </div>
        ))}
      </div>
    );
  }
}

export default Photos;
