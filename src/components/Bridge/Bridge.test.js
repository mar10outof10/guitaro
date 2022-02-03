import { render, screen } from '@testing-library/react';
import Bridge from './Bridge';

test.skip('renders', () => {
  render(<Bridge />);
  const linkElement = screen.getByText(/bridge/i);
  expect(linkElement).toBeInTheDocument();
});
