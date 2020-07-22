import React from "react";
import { useDispatch } from "react-redux";
import { createBlog } from "../reducers/blogReducer";

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
    <form onSubmit={addBlog}>
      <input name="title" />
      <input name="url" />
      <button type="submit">add</button>
    </form>
  );
};

export default NewBlog;
