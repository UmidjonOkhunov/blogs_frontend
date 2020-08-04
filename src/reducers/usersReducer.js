import usersService from "../services/users";

const usersReducer = (state = [], action) => {
  switch (action.type) {
    case "SIGN_UP":
      return state.concat(action.data);
    case "INIT_USERS":
      return action.data;
    default:
      return state;
  }
};

export const signUp = (data) => {
  return async (dispatch) => {
    const newUser = await usersService.create(data);
    dispatch({
      type: "SIGN_UP",
      data: newUser,
    });
  };
};

export const initializeUsers = () => {
  return async (dispatch) => {
    const users = await usersService.getAll();
    dispatch({
      type: "INIT_USERS",
      data: users,
    });
  };
};

export default usersReducer;
