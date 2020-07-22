import React from "react";
import { notificationChange } from "../reducers/notificationReducer";
import { login } from "../reducers/userReducer";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const username = event.target.username.value;
      event.target.username.value = "";
      const password = event.target.password.value;
      event.target.password.value = "";
      dispatch(login({ username, password }));
    } catch (exception) {
      dispatch(notificationChange("Wrong credentials", 10));
    }
  };
  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <div>
          username
          <input name="username" />
        </div>
        <div>
          password
          <input name="password" type="password" />
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  );
};

export default LoginForm;
