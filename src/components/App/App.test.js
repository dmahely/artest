import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { App } from './App';

it('renders learn react link', () => {
    render(<App />);
    expect(
        screen.getByText(/Guess which artist the album belongs to/i)
    ).toBeVisible();
});

it('goes to round selection when the start button is clicked', () => {
    render(<App />);
    const startButton = screen.getByRole('button', { name: /start/i });
    fireEvent.click(startButton);
    expect(
        screen.getByText(/How many rounds do you want to play\?/i)
    ).toBeVisible();
});
