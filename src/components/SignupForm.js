import React from "react";
import { notificationChange } from "../reducers/notificationReducer";
import { signUp } from "../reducers/usersReducer";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

const SignupForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      const name = event.target.name.value;
      event.target.name.value = "";
      const username = event.target.username.value;
      event.target.username.value = "";
      const password = event.target.password.value;
      event.target.password.value = "";
      const password2 = event.target.password2.value;
      event.target.password2.value = "";
      if (password !== password2) {
        dispatch(notificationChange("Passwords do not match", 10));
        return;
      }
      await dispatch(signUp({ username, name, password }));

      history.push("/");
    } catch (exception) {
      dispatch(notificationChange("Wrong credentials", 10));
    }
  };
  return (
    <div>
      <h2>Signup</h2>
      <Form onSubmit={handleSignup}>
        <Form.Group>
          <Form.Label>Full Name:</Form.Label>
          <Form.Control type="text" name="name" />
          <Form.Label>username:</Form.Label>
          <Form.Control type="text" name="username" />
          <Form.Label>password:</Form.Label>
          <Form.Control type="password" name="password" />
          <Form.Label>repeat your password:</Form.Label>
          <Form.Control type="password" name="password2" />
          <Button variant="primary" type="submit">
            Signup
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default SignupForm;
