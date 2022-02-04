import { render, screen } from "@testing-library/react";
import HeadString from "./HeadString.js";

test.skip("renders", () => {
  render(<HeadString />);
  const linkElement = screen.getByText(/headstring/i);
  expect(linkElement).toBeInTheDocument();
});
