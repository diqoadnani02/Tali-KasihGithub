import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import Home from './Pages/Home'





test('render one pages', () => {
  render(<Home />);
  const linkElement = screen.getByText(/charity/i);
  expect(linkElement).toBeInTheDocument();
});
