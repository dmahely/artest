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

test('can select 5 rounds an start the game', async () => {
    render(<App />);

    const startButton = screen.getByRole('button', { name: /start/i });
    fireEvent.click(startButton);

    const fiveRoundsButton = screen.getByRole('button', { name: '5' });
    fireEvent.click(fiveRoundsButton);

    // Wait for text showing current round, 1 out of 5.
    await screen.findByText('1/5');
    expect(screen.getByText('Juice WRLD')).toBeVisible();
    expect(screen.getByText('Trippie Redd')).toBeVisible();
    expect(screen.getByText('Lil Tecca')).toBeVisible();
    expect(screen.getByText('Comethazine')).toBeVisible();
});
