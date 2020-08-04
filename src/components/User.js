import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Blog } from "./Blogs";
import { Table } from "react-bootstrap";

const User = () => {
  const id = useParams().id;

  const user = useSelector((state) =>
    state.users.find((user) => user.id === id)
  );

  const blogs = useSelector((state) =>
    state.blogs.filter((blog) => blog.author === user.username)
  );

  return (
    <div>
      <h2> {user.username} </h2>
      <h3>Added Blogs</h3>

      <Table striped>
        <tbody>
          {blogs.map((blog) => (
            <Blog key={blog.id} blog={blog} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default User;
