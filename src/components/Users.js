import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { like, remove } from "../reducers/blogReducer";
import { notificationChange } from "../reducers/notificationReducer";

const Blog = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) =>
    state.blogs.filter((blog) => blog.title.includes(state.filter))
  );

  const id = useParams().id;
  const blog = blogs.find((blog) => blog.id === id);

  const handleLike = (blog) => {
    const newObject = {
      ...blog,
      likes: blog.likes + 1,
    };
    dispatch(like(blog.id, newObject));
    dispatch(notificationChange(`you voted '${blog.title}'`, 10));
  };

  const handleDelete = (id) => {
    dispatch(remove(id));
  };

  return (
    <div>
      <h2> {blog.title} </h2>
      <div>
        <button onClick={() => handleLike(blog)}>like</button> {blog.likes}{" "}
      </div>
      <button onClick={() => handleDelete(id)}>delete</button>
      <div>{blog.author}</div>
      <div>{blog.url}</div>
    </div>
  );
};

export default Blog;
