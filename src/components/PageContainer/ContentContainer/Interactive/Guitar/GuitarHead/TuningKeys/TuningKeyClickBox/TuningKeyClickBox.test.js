import { render, screen } from "@testing-library/react";
import TuningKeyClickBox from "./TuningKeyClickBox.js";

test.skip("renders", () => {
  render(<TuningKeyClickBox />);
  const linkElement = screen.getByText(/tuningkeyclickbox/i);
  expect(linkElement).toBeInTheDocument();
});
