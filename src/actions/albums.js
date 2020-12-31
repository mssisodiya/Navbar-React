import axios from "axios";

export const fetchAlbums = () => {
  return async function (dispatch) {
    const { data: albums } = await axios.get(
      "https://jsonplaceholder.typicode.com/albums"
    );
    dispatch(setAlbums(albums));
  };
};

const setAlbums = (albums = null) => {
  if (albums) {
    return {
      type: "SET_ALBUMS",
      payload: albums,
    };
  }
};

export const fetchAlbumsById = (id) => {
  return async function (dispatch) {
    const { data: album } = await axios.get(
      `https://jsonplaceholder.typicode.com/albums/${id}`
    );
    dispatch(setUserAlbum(album));
  };
};

export const setUserAlbum = (albums = null) => {
  if (albums) {
    return {
      type: "SET_ALBUMS_BY_ID",
      payload: albums,
    };
  }
};

export const addNewAlbum = (newAlbum) => {
  return async function (dispatch) {
    const { data: res } = await axios.post(
      `https://jsonplaceholder.typicode.com/albums`,
      newAlbum
    );
    dispatch(addAlbum(res));
    alert("added " + res.title);
  };
};

export const addAlbum = (albums = null) => {
  if (albums) {
    return {
      type: "ADD_NEW_ALBUM",
      payload: albums,
    };
  }
};
