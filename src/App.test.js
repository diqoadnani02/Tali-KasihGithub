import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';


describe('testing text', () => {
  test('cek tulisan donate', () => {
    render(<App />);
    const txt = screen.getByText("donate")
    expect(txt).toBeInTheDocument();
  })

  test('cek tulisan campaign', () => {
    render(<App />);
    const txt =  screen.getByText(/campaign/i);
    expect(txt).toBeInTheDocument();
  })
});

