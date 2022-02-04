import { render, screen } from "@testing-library/react";
import ContentContainer from "./ContentContainer.js";

test.skip("renders", () => {
  render(<ContentContainer />);
  const linkElement = screen.getByText(/contentcontainer/i);
  expect(linkElement).toBeInTheDocument();
});
