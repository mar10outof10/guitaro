import { render, screen } from "@testing-library/react";
import TuningPosts from "./TuningPosts";

test.skip("renders", () => {
  render(<TuningPosts />);
  const linkElement = screen.getByText(/tuningposts/i);
  expect(linkElement).toBeInTheDocument();
});
