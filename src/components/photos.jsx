import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Photos = ({ match }) => {
  const [photos, setPhotos] = useState([]);
  console.log(match);
  const api = match.params.id
    ? `https://jsonplaceholder.typicode.com/photos?albumId=${match.params.id}`
    : "https://jsonplaceholder.typicode.com/photos";

  useEffect(() => {
    fetchPhotos();
  }, []);

  async function fetchPhotos() {
    const { data: photos } = await axios.get(api);
    setPhotos(photos.slice(-100));
  }

  return (
    <div className="row">
      <div className="col-3">
        {match.params.id ? (
          <Link
            to={`/photos/newPhoto/${match.params.id}`}
            className="btn btn-primary btn-sm"
          >
            Add New Photo
          </Link>
        ) : (
          ""
        )}
      </div>
      {photos.map((photo) => (
        <div key={photo.id} className="col-6 col-md-3">
          <img className="card-img-top" src={photo.url} />
        </div>
      ))}
    </div>
  );
};

export default Photos;
