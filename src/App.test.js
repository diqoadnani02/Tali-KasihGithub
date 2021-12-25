import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import App from './App'

test('renders campaign text button', () => {
  render(<App />);
  const text = screen.getByText(/campaign/i);
  expect(text).toBeInTheDocument();
});
