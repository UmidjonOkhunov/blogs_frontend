import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { like, remove } from "../reducers/blogReducer";
import { notificationChange } from "../reducers/notificationReducer";
import { Button, Badge } from "react-bootstrap";

const Blog = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) =>
    state.blogs.filter((blog) => blog.title.includes(state.filter))
  );

  const id = useParams().id;
  const blog = blogs.find((blog) => blog.id === id);

  if (!blog) {
    return null;
  }

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
      <Button variant="secondary" onClick={() => handleLike(blog)}>
        Like <Badge variant="success">{blog.likes}</Badge>
      </Button>{" "}
      <div>
        <Button
          variant="secondary"
          onClick={() => handleDelete(id)}
          style={{ marginTop: "10px", marginBottom: "10px" }}
        >
          Delete
        </Button>
      </div>
      <div>{blog.author}</div>
      <a href={blog.url}>{blog.url}</a>
    </div>
  );
};

export default Blog;
