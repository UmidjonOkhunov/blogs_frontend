import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Blog from "./Blog";

test("renders content", () => {
  const blogObject = {
    title: "I'll start using a standing chair today",
    author: "Man",
    url: "blog.url",
  };

  const component = render(<Blog blog={blogObject} />);

  expect(component.container).toHaveTextContent(
    "I'll start using a standing chair today"
  );
});

export default Blog;
