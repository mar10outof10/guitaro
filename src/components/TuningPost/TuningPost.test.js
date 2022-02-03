import { render, screen } from '@testing-library/react';
import TuningPost from './TuningPost';

test.skip('renders', () => {
  render(<TuningPost />);
  const linkElement = screen.getByText(/tuningpost/i);
  expect(linkElement).toBeInTheDocument();
});
