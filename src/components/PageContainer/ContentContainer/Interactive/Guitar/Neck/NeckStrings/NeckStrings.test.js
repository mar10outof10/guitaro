import { render, screen } from "@testing-library/react";
import NeckStrings from "./NeckStrings.js";

test.skip("renders", () => {
  render(<NeckStrings />);
  const linkElement = screen.getByText(/neckstrings/i);
  expect(linkElement).toBeInTheDocument();
});
