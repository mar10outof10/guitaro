import { render, screen } from "@testing-library/react";
import Nut from "./Nut.js";

test.skip("renders", () => {
  render(<Nut />);
  const linkElement = screen.getByText(/nut/i);
  expect(linkElement).toBeInTheDocument();
});
