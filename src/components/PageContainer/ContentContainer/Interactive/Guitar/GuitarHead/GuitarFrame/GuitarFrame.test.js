import { render, screen } from "@testing-library/react";
import GuitarFrame from "./GuitarFrame.js";

test.skip("renders", () => {
  render(<GuitarFrame />);
  const linkElement = screen.getByText(/guitarframe/i);
  expect(linkElement).toBeInTheDocument();
});
