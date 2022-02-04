import { render, screen } from "@testing-library/react";
import NeckString from "./NeckString.js";

test.skip("renders", () => {
  render(<NeckString />);
  const linkElement = screen.getByText(/neckString/i);
  expect(linkElement).toBeInTheDocument();
});
