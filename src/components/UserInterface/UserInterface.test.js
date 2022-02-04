import { render, screen } from "@testing-library/react";
import UserInterface from "./UserInterface.js";

test.skip("renders", () => {
  render(<UserInterface />);
  const linkElement = screen.getByText(/userinterface/i);
  expect(linkElement).toBeInTheDocument();
});
