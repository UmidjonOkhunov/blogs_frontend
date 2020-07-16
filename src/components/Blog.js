import React, { useState } from "react";

const blogStyle = {
  paddingTop: 10,
  paddingLeft: 2,
  border: "solid",
  borderWidth: 1,
  marginBottom: 5,
};

const Blog = ({ blog, updateBlog }) => {
  const [visible, setVisible] = useState(false);

  const showWhenVisible = { display: visible ? "" : "none", lineHeight: 1 };

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  const addLike = (event) => {
    event.preventDefault();
    const blogObject = {
      title: blog.title,
      author: blog.author,
      url: blog.url,
      likes: blog.likes + 1,
    };

    updateBlog(blog.id, blogObject);
  };

  return (
    <div style={blogStyle}>
      <div>
        {blog.title}{" "}
        <button onClick={toggleVisibility}>{visible ? "Hide" : "Show"}</button>
      </div>
      <div style={showWhenVisible}>
        <p>{blog.url}</p>
        <p>
          {blog.likes} <button onClick={addLike}>Like</button>
        </p>
        <p>{blog.author}</p>
      </div>
    </div>
  );
};

export default Blog;
