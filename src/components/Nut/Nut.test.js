import { render, screen } from "@testing-library/react";
import Nut from "./Nut";

test.skip("renders", () => {
  render(<Nut />);
  const linkElement = screen.getByText(/nut/i);
  expect(linkElement).toBeInTheDocument();
});
