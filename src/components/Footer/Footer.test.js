import { render, screen } from "@testing-library/react";
import Footer from "./Footer.js";

test.skip("renders", () => {
  render(<Footer />);
  const linkElement = screen.getByText(/footer/i);
  expect(linkElement).toBeInTheDocument();
});
