import { render, screen } from "@testing-library/react";
import GuitarHead from "./GuitarHead.js";

test.skip("renders", () => {
  render(<GuitarHead />);
  const linkElement = screen.getByText(/guitarhead/i);
  expect(linkElement).toBeInTheDocument();
});
