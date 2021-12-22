import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import Login from './Components/Login/Login'




test('renders learn react link', () => {
  render(<Login />);
  const linkElement = screen.getByText(/new/i);
  expect(linkElement).toBeInTheDocument();
});
