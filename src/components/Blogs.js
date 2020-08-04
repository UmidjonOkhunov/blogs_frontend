import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";

export const Blog = ({ blog }) => {
  return (
    <tr>
      <td>
        <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
      </td>
      <td> {blog.author} </td>
    </tr>
  );
};

const Blogs = () => {
  const blogs = useSelector((state) =>
    state.blogs.filter((blog) =>
      blog.title.toLowerCase().includes(state.filter)
    )
  );

  return (
    <Table striped>
      <tbody>
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
      </tbody>
    </Table>
  );
};

export default Blogs;
