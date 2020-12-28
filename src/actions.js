import axios from "axios";

const api = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = () => {
  return async function (dispatch) {
    const { data: users } = await axios.get(api);
    dispatch(setUsers(users));
  };
};

export const setUsers = (users = null) => {
  if (users) {
    return {
      type: "SET_USERS",
      payload: users,
    };
  }
};
export const fetchAlbums = () => {
  return async function (dispatch) {
    const { data: albums } = await axios.get(
      "https://jsonplaceholder.typicode.com/albums"
    );
    dispatch(setAlbums(albums));
  };
};

export const setAlbums = (albums = null) => {
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

export const fetchPhotos = () => {
  return async function (dispatch) {
    const { data: photos } = await axios.get(
      "https://jsonplaceholder.typicode.com/photos"
    );
    dispatch(setPhotos(photos));
  };
};
export const setPhotos = (photos = null) => {
  if (photos) {
    return {
      type: "FETCH_ALL_PHOTOS",
      payload: photos,
    };
  }
};

export const fetchPhotosById = (id) => {
  return async function (dispatch) {
    const { data: photos } = await axios.get(
      `https://jsonplaceholder.typicode.com/photos/${id}`
    );
    dispatch(setUserPhoto(photos));
  };
};

export const setUserPhoto = (photos = null) => {
  if (photos) {
    return {
      type: "SET_PHOTOS_BY_ID",
      payload: photos,
    };
  }
};

export const addNewPhoto = (newPhoto) => {
  return async function (dispatch) {
    const { data: res } = await axios.post(
      `https://jsonplaceholder.typicode.com/photos`,
      newPhoto
    );
    dispatch(addPhoto(res));
    alert("added " + res.photo);
  };
};

export const addPhoto = (photos = null) => {
  if (photos) {
    return {
      type: "ADD_NEW_Photo",
      payload: photos,
    };
  }
};
