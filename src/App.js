import React, { useEffect, useRef } from "react";
import Blogs from "./components/Blogs";
import Blog from "./components/Blog";
import Notification from "./components/Notification";
import Filter from "./components/Filter";
import LoginForm from "./components/LoginForm";
import Togglable from "./components/Togglable";
import NewBlog from "./components/NewBlog";
import { useDispatch, useSelector } from "react-redux";
import { initializeBlogs } from "./reducers/blogReducer";
import { checkLogin, logout } from "./reducers/userReducer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

const App = () => {
  const blogFormRef = useRef();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const padding = {
    padding: 5,
  };

  useEffect(() => {
    dispatch(initializeBlogs());
  }, [dispatch]);

  useEffect(() => {
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
    <Router>
      <div>
        <Link style={padding} to="/">
          home
        </Link>
        <Link style={padding} to="/blogs">
          blogs
        </Link>
        <Link style={padding} to="/users">
          users
        </Link>
        {user && (
          <div>
            <em>{user.name} logged in</em>{" "}
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>

      <Notification />

      <Switch>
        <Route
          path="/blogs/:id"
          render={() => (user ? <Blog /> : <Redirect to="/login" />)}
        />
        <Route
          path="/blogs"
          render={() => (user ? <Blogs /> : <Redirect to="/login" />)}
        />
        <Route
          path="/users"
          render={() =>
            user ? <h1>Users not implemented</h1> : <Redirect to="/login" />
          }
        />
        <Route path="/login">
          <LoginForm />
        </Route>
        <Route
          path="/"
          render={() =>
            user ? (
              <div>
                <Filter />
                {blogForm()}
                <Blogs />
              </div>
            ) : (
              <Redirect to="/login" />
            )
          }
        />
      </Switch>

      <div>
        <i>Blog app, Department of Computer Science 2020</i>
      </div>
    </Router>
  );
};

export default App;
