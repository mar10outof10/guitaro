import { render, screen } from "@testing-library/react";
import HeaderOptions from "./HeaderOptions.js";

test.skip("renders", () => {
  render(<HeaderOptions />);
  const linkElement = screen.getByText(/headeroptions/i);
  expect(linkElement).toBeInTheDocument();
});