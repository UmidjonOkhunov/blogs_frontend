import blogService from "../services/blogs";
import loginService from "../services/login";

const userReducer = (user = null, action) => {
  switch (action.type) {
    case "LOGIN":
      return action.data;
    case "LOGOUT":
      return null;
    default:
      return user;
  }
};

export const login = (credentials) => {
  return async (dispatch) => {
    const user = await loginService.login(credentials);
    window.localStorage.setItem("loggedUser", JSON.stringify(user));
    blogService.setToken(user.token);
    dispatch({
      type: "LOGIN",
      data: user,
    });
  };
};

export const checkLogin = () => {
  return async (dispatch) => {
    const loggedUserJSON = window.localStorage.getItem("loggedUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      blogService.setToken(user.token);
      dispatch({
        type: "LOGIN",
        data: user,
      });
    }
  };
};

export const logout = () => {
  window.localStorage.clear();
  return async (dispatch) => {
    dispatch({
      type: "LOGOUT",
      data: null,
    });
  };
};

export default userReducer;
