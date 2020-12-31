import axios from "axios";
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
