import { render, screen } from "@testing-library/react";
import Header from "./Header";

test.skip("renders", () => {
  render(<Header />);
  const linkElement = screen.getByText(/header/i);
  expect(linkElement).toBeInTheDocument();
});
