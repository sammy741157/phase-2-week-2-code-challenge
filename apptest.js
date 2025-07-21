import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Goal Tracker title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Goal Tracker/i);
  expect(titleElement).toBeInTheDocument();
});