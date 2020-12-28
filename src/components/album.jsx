import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlbums, fetchAlbumsById } from "../actions";

function Albums({ match }) {
  const dispatch = useDispatch();
  const albums = useSelector((state) => state.albums);

  useEffect(() => {
    dispatch(
      match.params.id ? fetchAlbumsById(match.params.id) : fetchAlbums()
    );
  }, [match, dispatch]);

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
