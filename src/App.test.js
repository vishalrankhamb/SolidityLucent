// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SolidityLucent title', () => {
    render(<App />);
    const titleElement = screen.getByText(/SolidityLucent/i);
    expect(titleElement).toBeInTheDocument();
});
