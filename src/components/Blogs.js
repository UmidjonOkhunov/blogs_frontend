import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { like, remove } from "../reducers/blogReducer";
import { notificationChange } from "../reducers/notificationReducer";

const Blog = ({ blog, handleLike, handleDelete }) => {
  return (
    <li>
      <div>
        {blog.title} <button onClick={handleLike}>like</button> {blog.likes}{" "}
        <button onClick={handleDelete}>delete</button>
      </div>
    </li>
  );
};

const Blogs = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) =>
    state.blogs.filter((blog) => blog.title.includes(state.filter))
  );

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
    <ul>
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          handleLike={() => handleLike(blog)}
          handleDelete={() => handleDelete(blog.id)}
        />
      ))}
    </ul>
  );
};

export default Blogs;
