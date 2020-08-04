import React from "react";
import { notificationChange } from "../reducers/notificationReducer";
import { login } from "../reducers/userReducer";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const history = useHistory();

  if (user) {
    history.push("/");
  }
  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const username = event.target.username.value;
      event.target.username.value = "";
      const password = event.target.password.value;
      event.target.password.value = "";
      await dispatch(login({ username, password }));

      history.push("/");
    } catch (exception) {
      dispatch(notificationChange("Wrong credentials", 10));
    }
  };
  const sighupStyle = {
    paddingLeft: "15px",
  };
  return (
    <div>
      <h2>Login</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group>
          <Form.Label>username:</Form.Label>
          <Form.Control type="text" name="username" />
          <Form.Label>password:</Form.Label>
          <Form.Control type="password" name="password" />
          <Button variant="primary" type="submit">
            Login
          </Button>
          <Link style={sighupStyle} to="/signup">
            Sign Up
          </Link>
        </Form.Group>
      </Form>
    </div>
  );
};

export default LoginForm;
