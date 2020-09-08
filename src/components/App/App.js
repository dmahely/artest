import React, { useState, useEffect } from 'react';
import './App.css';
import { Start } from '../Start/Start';
import { RoundSelection } from '../RoundSelection/RoundSelection';
import { Round } from '../Round/Round';
import { Result } from '../Result/Result';
import { AccessTokenContext } from '../../hooks/TokenContext';
import { fetchAccessToken } from '../fetchAccessToken';

const App = () => {
  const [route, setRoute] = useState('start');
  const [rounds, setRounds] = useState(5);
  const [accessToken, setAccessToken] = 
  useState({
    token: null,
    expires_at: null
  });
  const [albums, setAlbums] = useState({albums: []});
  const [currentRound, setCurrentRound] = useState(0);

  useEffect(() => {
    // get access token and save it in localStorage
    
    const getToken = async() => {
      const token = await fetchAccessToken();
      localStorage.setItem('token', JSON.stringify(token));
    }

    getToken();
    
  }, []);

    return (
      <div className="App--container">
        <AccessTokenContext.Provider value={accessToken}>
          {route === 'start' && <Start setRoute={setRoute} />}
          {route === 'roundSelection' && <RoundSelection setRoute={setRoute} setRounds={setRounds} setAlbums={setAlbums} />}
          {route === 'play' && <Round setRoute={setRoute} albums={albums} rounds={rounds} setCurrentRound={setCurrentRound} currentRound={currentRound} />}
          {route === 'result' && <Result setRoute={setRoute} />}
        </AccessTokenContext.Provider>
      </div>
    );
  }

export { App };
