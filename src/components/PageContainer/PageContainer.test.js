import { render, screen } from "@testing-library/react";
import PageContainer from "./PageContainer";

test.skip("renders", () => {
  render(<PageContainer />);
  const linkElement = screen.getByText(/pagecontainer/i);
  expect(linkElement).toBeInTheDocument();
});
