import { render, screen } from "@testing-library/react";
import HeadStrings from "./HeadStrings.js";

test.skip("renders", () => {
  render(<HeadStrings />);
  const linkElement = screen.getByText(/headstrings/i);
  expect(linkElement).toBeInTheDocument();
});
