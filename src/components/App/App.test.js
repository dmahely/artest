import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { App } from './App';

it('renders guess which artist the album belongs to text', () => {
    render(<App />);
    expect(
        screen.getByText(/Guess which artist the album belongs to/i)
    ).toBeVisible();
});

it('renders artest logo', () => {
    render(<App />);
    expect(screen.getByAltText(/Artest logo/i)).toBeVisible();
});

it('goes to round selection when the start button is clicked', () => {
    render(<App />);
    const startButton = screen.getByRole('button', { name: /start/i });
    fireEvent.click(startButton);
    expect(
        screen.getByText(/How many rounds do you want to play\?/i)
    ).toBeVisible();
});

it('can select 5 rounds and start the game', async () => {
    render(<App />);

    const startButton = screen.getByRole('button', { name: /start/i });
    fireEvent.click(startButton);

    const fiveRoundsButton = screen.getByRole('button', { name: '5' });
    fireEvent.click(fiveRoundsButton);

    // Wait for text showing current round, 1 out of 5.
    await screen.findByText('1/5');
    expect(screen.getByText('1/5')).toBeVisible();
});

it('selecting wrong answer shows incorrect result', async () => {
    render(<App />);

    const startButton = screen.getByRole('button', { name: /start/i });
    fireEvent.click(startButton);

    const fiveRoundsButton = screen.getByRole('button', { name: '5' });
    fireEvent.click(fiveRoundsButton);

    await screen.findByText('1/5');
    const wrongOption = screen.getByRole('img', {
        name: 'Comethazine',
    });
    fireEvent.click(wrongOption);

    expect(screen.getByText(/Incorrect/i)).toBeVisible();
});

it('selecting correct answer shows correct result', async () => {
    render(<App />);

    const startButton = screen.getByRole('button', { name: /start/i });
    fireEvent.click(startButton);

    const fiveRoundsButton = screen.getByRole('button', { name: '5' });
    fireEvent.click(fiveRoundsButton);

    await screen.findByText('1/5');
    const correctOption = screen.getByRole('img', {
        name: 'Juice WRLD',
    });
    fireEvent.click(correctOption);

    expect(screen.getByText(/Correct/i)).toBeVisible();
});

it('four artist options are shown in round', async () => {
    render(<App />);

    const startButton = screen.getByRole('button', { name: /start/i });
    fireEvent.click(startButton);

    const fiveRoundsButton = screen.getByRole('button', { name: '5' });
    fireEvent.click(fiveRoundsButton);

    await screen.findByText('1/5');
    expect(screen.getByText('Juice WRLD')).toBeVisible();
    expect(screen.getByText('Trippie Redd')).toBeVisible();
    expect(screen.getByText('Lil Tecca')).toBeVisible();
    expect(screen.getByText('Comethazine')).toBeVisible();
});

it('shows correct result (2/5)', async () => {
    render(<App />);

    const startButton = screen.getByRole('button', { name: /start/i });
    fireEvent.click(startButton);

    const fiveRoundsButton = screen.getByRole('button', { name: '5' });
    fireEvent.click(fiveRoundsButton);

    await screen.findByText('1/5');
    let artist = screen.getByRole('img', {
        name: 'Juice WRLD',
    });
    fireEvent.click(artist);

    await screen.findByText(/Correct/i);
    let continueButton = screen.getByRole('button', { name: /Continue/i });
    fireEvent.click(continueButton);

    await screen.findByText('2/5');
    artist = screen.getByRole('img', {
        name: 'Juice WRLD',
    });
    fireEvent.click(artist);

    await screen.findByText(/Correct/i);
    continueButton = screen.getByRole('button', { name: /Continue/i });
    fireEvent.click(continueButton);

    await screen.findByText('3/5');
    artist = screen.getByRole('img', {
        name: 'Lil Tecca',
    });
    fireEvent.click(artist);
    await screen.findByText(/Incorrect/i);

    continueButton = screen.getByRole('button', { name: /Continue/i });
    fireEvent.click(continueButton);

    await screen.findByText('4/5');
    artist = screen.getByRole('img', {
        name: 'Lil Tecca',
    });
    fireEvent.click(artist);
    await screen.findByText(/Incorrect/i);

    continueButton = screen.getByRole('button', { name: /Continue/i });
    fireEvent.click(continueButton);

    await screen.findByText('5/5');
    artist = screen.getByRole('img', {
        name: 'Lil Tecca',
    });
    fireEvent.click(artist);
    await screen.findByText(/Incorrect/i);

    continueButton = screen.getByRole('button', { name: /Continue/i });
    fireEvent.click(continueButton);

    expect(screen.getByAltText('2/5 score')).toBeVisible();
});

it('redirects to start when play again is clicked', async () => {
    render(<App />);

    const startButton = screen.getByRole('button', { name: /start/i });
    fireEvent.click(startButton);

    const fiveRoundsButton = screen.getByRole('button', { name: '5' });
    fireEvent.click(fiveRoundsButton);

    await screen.findByText('1/5');
    let artist = screen.getByRole('img', {
        name: 'Juice WRLD',
    });
    fireEvent.click(artist);

    await screen.findByText(/Correct/i);
    let continueButton = screen.getByRole('button', { name: /Continue/i });
    fireEvent.click(continueButton);

    await screen.findByText('2/5');
    artist = screen.getByRole('img', {
        name: 'Juice WRLD',
    });
    fireEvent.click(artist);

    await screen.findByText(/Correct/i);
    continueButton = screen.getByRole('button', { name: /Continue/i });
    fireEvent.click(continueButton);

    await screen.findByText('3/5');
    artist = screen.getByRole('img', {
        name: 'Lil Tecca',
    });
    fireEvent.click(artist);
    await screen.findByText(/Incorrect/i);

    continueButton = screen.getByRole('button', { name: /Continue/i });
    fireEvent.click(continueButton);

    await screen.findByText('4/5');
    artist = screen.getByRole('img', {
        name: 'Lil Tecca',
    });
    fireEvent.click(artist);
    await screen.findByText(/Incorrect/i);

    continueButton = screen.getByRole('button', { name: /Continue/i });
    fireEvent.click(continueButton);

    await screen.findByText('5/5');
    artist = screen.getByRole('img', {
        name: 'Lil Tecca',
    });
    fireEvent.click(artist);
    await screen.findByText(/Incorrect/i);

    continueButton = screen.getByRole('button', { name: /Continue/i });
    fireEvent.click(continueButton);

    let playAgainButton = screen.getByRole('button', { name: /Play again/i });
    fireEvent.click(playAgainButton);

    expect(screen.getByText(/Start/i)).toBeVisible();
});
