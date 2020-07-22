import blogService from "../services/blogs";

const blogReducer = (state = [], action) => {
  switch (action.type) {
    case "NEW_BLOG":
      return state.concat(action.data);
    case "LIKE": {
      const id = action.data.id;
      const blogToChange = state.find((n) => n.id === id);
      const changedBlog = {
        ...blogToChange,
        likes: blogToChange.likes + 1,
      };
      return state.map((blog) => (blog.id !== id ? blog : changedBlog));
    }
    case "DELETE": {
      const id = action.data.id;
      return state.filter((blog) => blog.id !== id);
    }
    case "INIT_BLOGS":
      return action.data;
    default:
      return state;
  }
};

export const createBlog = (data) => {
  return async (dispatch) => {
    const newBlog = await blogService.create(data);
    dispatch({
      type: "NEW_BLOG",
      data: newBlog,
    });
  };
};

export const like = (id, data) => {
  return async (dispatch) => {
    await blogService.update(id, data);
    dispatch({
      type: "LIKE",
      data: { id },
    });
  };
};

export const remove = (id) => {
  return async (dispatch) => {
    await blogService.remove(id);
    dispatch({
      type: "DELETE",
      data: { id },
    });
  };
};

export const initializeBlogs = () => {
  return async (dispatch) => {
    const blogs = await blogService.getAll();
    dispatch({
      type: "INIT_BLOGS",
      data: blogs,
    });
  };
};

export default blogReducer;
