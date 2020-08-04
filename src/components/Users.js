import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";

const User = ({ user }) => {
  return (
    <tr>
      <td>
        <Link to={`/users/${user.id}`}>{user.username}</Link>
      </td>
      <td> {user.blogs.length} </td>
    </tr>
  );
};

const Users = () => {
  const users = useSelector((state) => state.users);
  console.log("diplaying", users);
  return (
    <Table striped>
      <tbody>
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </tbody>
    </Table>
  );
};

export default Users;
