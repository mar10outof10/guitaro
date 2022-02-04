import { render, screen } from "@testing-library/react";
import Neck from "./Neck.js";

test.skip("renders", () => {
  render(<Neck />);
  const linkElement = screen.getByText(/neck/i);
  expect(linkElement).toBeInTheDocument();
});
