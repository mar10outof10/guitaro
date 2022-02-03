import { render, screen } from '@testing-library/react';
import TuningKeys from './TuningKeys';

test.skip('renders', () => {
  render(<TuningKeys />);
  const linkElement = screen.getByText(/TuningKeys/i);
  expect(linkElement).toBeInTheDocument();
});
