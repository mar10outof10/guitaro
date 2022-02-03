import { render, screen } from '@testing-library/react';
import GuitarHead from './GuitarHead';

test.skip('renders', () => {
  render(<GuitarHead />);
  const linkElement = screen.getByText(/guitarhead/i);
  expect(linkElement).toBeInTheDocument();
});
