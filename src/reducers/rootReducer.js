import { combineReducers } from "redux";

const initState = {
  users: [],
  albums: [],
  photos: [],
};

// export const usersInit = [];

const usersReducer = (state = initState.users, action) => {
  switch (action.type) {
    case "SET_USERS":
      return [...action.payload];
    default:
      return state;
  }
};
const albumsReducer = (state = initState.albums, action) => {
  switch (action.type) {
    case "SET_ALBUMS":
      return [...action.payload];
    case "SET_ALBUMS_BY_ID":
      return [action.payload];
    case "ADD_NEW_ALBUM":
      return [...state, action.payload];
    default:
      return state;
  }
};

const photosReducer = (state = initState.photos, action) => {
  switch (action.type) {
    case "FETCH_ALL_PHOTOS":
      return [...action.payload];
    case "SET_PHOTOS_BY_ID":
      return [action.payload];
    case "ADD_NEW_PHOTO":
      return [...state, action.payload];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  users: usersReducer,
  albums: albumsReducer,
  photos: photosReducer,
});

export default rootReducer;
