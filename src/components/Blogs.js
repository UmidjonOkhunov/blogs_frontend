import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Blog = ({ blog }) => {
  return (
    <li>
      <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
    </li>
  );
};

const Blogs = () => {
  const blogs = useSelector((state) =>
    state.blogs.filter((blog) => blog.title.includes(state.filter))
  );

  return (
    <ul>
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </ul>
  );
};

export default Blogs;
