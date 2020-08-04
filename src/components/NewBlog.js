import React from "react";
import { useDispatch } from "react-redux";
import { createBlog } from "../reducers/blogReducer";
import { Form, Button } from "react-bootstrap";

const NewBlog = ({ blogFormRef }) => {
  const dispatch = useDispatch();

  const addBlog = (event) => {
    event.preventDefault();
    blogFormRef.current.toggleVisibility();
    const title = event.target.title.value;
    event.target.title.value = "";
    const url = event.target.url.value;
    event.target.url.value = "";
    const loggedUserJSON = window.localStorage.getItem("loggedUser");
    const user = JSON.parse(loggedUserJSON);
    const blogObject = {
      title: title,
      author: user.username,
      url: url,
    };

    dispatch(createBlog(blogObject));
  };

  return (
    <div>
      <h2>New Blog</h2>
      <Form onSubmit={addBlog}>
        <Form.Group>
          <Form.Label>title:</Form.Label>
          <Form.Control type="text" name="title" />
          <Form.Label>url:</Form.Label>
          <Form.Control type="text" name="url" />
          <Button variant="primary" type="submit">
            create
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default NewBlog;
