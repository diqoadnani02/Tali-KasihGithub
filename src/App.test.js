import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import Routes from './Routes/Routes'


describe('testing text', () => {
  test('cek tulisan donate', () => {
    render(<Routes />);
    const txt = screen.getByText("donate")
    expect(txt).toBeInTheDocument();
  })

  test('cek tulisan campaign', () => {
    render(<Routes />);
    const txt =  screen.getByText(/campaign/i);
    expect(txt).toBeInTheDocument();
  })
});


