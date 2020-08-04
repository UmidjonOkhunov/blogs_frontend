const notificationReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_NOTIFICATION":
      return action.notification;
    default:
      return state;
  }
};

export const notificationChange = (notification, timeout = 5) => {
  return async (dispatch) => {
    dispatch({
      type: "SET_NOTIFICATION",
      notification,
    });
    setTimeout(() => {
      dispatch(notificationChange(null));
    }, timeout * 1000);
  };
};

export default notificationReducer;
