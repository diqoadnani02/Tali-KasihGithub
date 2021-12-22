import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import Routes from './Routes/Routes'





test('testing di app lagi', () => {
  render(<Routes />);
  const linkElement = screen.getByText(/Donate/i);
  expect(linkElement).toBeInTheDocument();
});
