import React, { useEffect, useRef } from "react";
import Blogs from "./components/Blogs";
import Notification from "./components/Notification";
import Filter from "./components/Filter";
import LoginForm from "./components/LoginForm";
import Togglable from "./components/Togglable";
import NewBlog from "./components/NewBlog";
import { useDispatch, useSelector } from "react-redux";
import { initializeBlogs } from "./reducers/blogReducer";
import { checkLogin, logout } from "./reducers/userReducer";

const App = () => {
  const blogFormRef = useRef();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(initializeBlogs());
  }, [dispatch]);

  useEffect(() => {
    dispatch(checkLogin());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logout());
  };

  const loginForm = () => (
    <Togglable buttonLabel="login">
      <LoginForm />
    </Togglable>
  );

  const blogForm = () => (
    <Togglable buttonLabel="new blog" ref={blogFormRef}>
      <NewBlog blogFormRef={blogFormRef} />
    </Togglable>
  );

  return (
    <div>
      <h2>blogs</h2>
      <Notification />
      <Filter />
      {user === null ? (
        loginForm()
      ) : (
        <div>
          <p>
            {user.name} logged-in <button onClick={handleLogout}>Logout</button>
          </p>
          {blogForm()}
        </div>
      )}
      <Blogs />
    </div>
  );
};

export default App;
