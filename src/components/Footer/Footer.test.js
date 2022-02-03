import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

test.skip("renders", () => {
  render(<Footer />);
  const linkElement = screen.getByText(/footer/i);
  expect(linkElement).toBeInTheDocument();
});
