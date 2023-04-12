import { render, screen } from '@testing-library/react';
import App from './App';

test('Labukas or not', () => {
  render(<App />);
  expect(screen.getByRole('button')).toBeDisabled();
});