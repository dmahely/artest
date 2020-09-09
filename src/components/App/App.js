import React, { useState, useEffect } from 'react';
import './App.css';
import { Start } from '../Start/Start';
import { RoundSelection } from '../RoundSelection/RoundSelection';
import { Round } from '../Round/Round';
import { Result } from '../Result/Result';
import { fetchAccessToken } from '../fetchAccessToken';
import { isAccessTokenValid } from '../isAccessTokenValid';

const App = () => {
  const [route, setRoute] = useState('start');
  const [rounds, setRounds] = useState(5);
  const [albums, setAlbums] = useState({albums: []});
  const [currentRound, setCurrentRound] = useState(1);

  const accessToken = {
    token: null,
    expires_at: null
  };

  useEffect(() => {
    // get access token and save it in localStorage
    
    const getToken = async() => {
      
      if(!await isAccessTokenValid()) {
        const token = await fetchAccessToken();
        localStorage.setItem('token', JSON.stringify(token.token));
        localStorage.setItem('expiry', JSON.stringify(token.expires_at));
      }
      
    }
    getToken();

    
  }, [accessToken]);

    return (
      <div className="App--container">
          {route === 'start' && <Start setRoute={setRoute} />}
          {route === 'roundSelection' && <RoundSelection setRoute={setRoute} setRounds={setRounds} setAlbums={setAlbums} currentRound={currentRound} />}
          {route === 'play' && <Round setRoute={setRoute} albums={albums} rounds={rounds} setCurrentRound={setCurrentRound} currentRound={currentRound} />}
          {route === 'result' && <Result setRoute={setRoute} />}
      </div>
    );
  }

export { App };
