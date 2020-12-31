const initState = { users: [] };

export const usersReducer = (state = initState.users, action) => {
  switch (action.type) {
    case "SET_USERS":
      return [...action.payload];
    default:
      return state;
  }
};
