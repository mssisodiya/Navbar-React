import axios from "axios";
export const fetchUsers = () => {
  return async function (dispatch) {
    const { data: users } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    dispatch(setUsers(users));
  };
};

const setUsers = (users = null) => {
  if (users) {
    return {
      type: "SET_USERS",
      payload: users,
    };
  }
};
