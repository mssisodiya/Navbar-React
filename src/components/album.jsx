import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Albums({ match }) {
  const [albums, setAlbums] = useState([]);
  const api = match.params.id
    ? `https://jsonplaceholder.typicode.com/users/${match.params.id}/albums`
    : `https://jsonplaceholder.typicode.com/albums/`;

  useEffect(() => {
    async function fetchAlbum() {
      const { data: albums } = await axios.get(api);
      console.log(albums);
      setAlbums(albums);
    }
    fetchAlbum();
  }, [api]);

  return (
    <div className="row">
      <div className="col-3">
        {match.params.id ? (
          <Link
            to={`/albums/newAlbum/${match.params.id}`}
            className="btn btn-primary btn-sm"
          >
            Add New Album
          </Link>
        ) : (
          ""
        )}
      </div>
      <div className="col">
        <ul>
          {albums.map((album) => (
            <li key={album.id}>
              <Link to={`/photos/${album.id}`}>{album.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Albums;
