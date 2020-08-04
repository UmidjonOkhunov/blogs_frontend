import React, { useEffect, useRef, useLayoutEffect } from "react";
import Blogs from "./components/Blogs";
import Blog from "./components/Blog";
import Users from "./components/Users";
import User from "./components/User";
import Notification from "./components/Notification";
import Filter from "./components/Filter";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import Togglable from "./components/Togglable";
import NewBlog from "./components/NewBlog";
import { useDispatch, useSelector } from "react-redux";
import { initializeBlogs } from "./reducers/blogReducer";
import { initializeUsers } from "./reducers/usersReducer";
import { checkLogin, logout } from "./reducers/userReducer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const App = () => {
  const blogFormRef = useRef();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const padding = {
    padding: 5,
  };

  useEffect(() => {
    dispatch(initializeBlogs());
    dispatch(initializeUsers());
  }, [dispatch]);

  useLayoutEffect(() => {
    dispatch(checkLogin());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logout());
  };

  const blogForm = () => (
    <Togglable buttonLabel="new blog" ref={blogFormRef}>
      <NewBlog blogFormRef={blogFormRef} />
    </Togglable>
  );

  return (
    <div className="container">
      <Router>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#" as="span">
                <Link style={padding} to="/">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link href="#" as="span">
                <Link style={padding} to="/blogs">
                  Blogs
                </Link>
              </Nav.Link>
              <Nav.Link href="#" as="span">
                <Link style={padding} to="/users">
                  Users
                </Link>
              </Nav.Link>
              <Nav.Link href="#" as="span">
                {user && (
                  <div>
                    <em>{user.username} logged in</em>
                  </div>
                )}
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#" as="span" className="mr-sm-2">
                {user ? (
                  <em style={padding} onClick={handleLogout}>
                    {" "}
                    Logout{" "}
                  </em>
                ) : (
                  <Link to="/login">Login</Link>
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Notification />

        <Switch>
          <Route path="/blogs/:id">
            <Blog />
          </Route>
          <Route path="/blogs">
            <Blogs />
          </Route>
          <Route
            path="/users/:id"
            render={() => (user ? <User /> : <Redirect to="/login" />)}
          />
          <Route
            path="/users"
            render={() => (user ? <Users /> : <Redirect to="/login" />)}
          />
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/signup">
            <SignupForm />
          </Route>
          <Route
            path="/"
            render={() => (
              <div>
                <Filter />
                {user && blogForm()}
                <Blogs />
              </div>
            )}
          />
        </Switch>

        <div className="container">
          <i>Blog app, Department of Computer Science 2020</i>
        </div>
      </Router>
    </div>
  );
};

export default App;
