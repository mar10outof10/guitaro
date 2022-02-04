import { render, screen } from "@testing-library/react";
import TuningPost from "./TuningPost.js";

test.skip("renders", () => {
  render(<TuningPost />);
  const linkElement = screen.getByText(/tuningpost/i);
  expect(linkElement).toBeInTheDocument();
});
