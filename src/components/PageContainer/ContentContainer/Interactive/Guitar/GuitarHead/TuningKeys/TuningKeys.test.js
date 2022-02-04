import { render, screen } from "@testing-library/react";
import TuningKeys from "./TuningKeys.js";

test.skip("renders", () => {
  render(<TuningKeys />);
  const linkElement = screen.getByText(/TuningKeys/i);
  expect(linkElement).toBeInTheDocument();
});
