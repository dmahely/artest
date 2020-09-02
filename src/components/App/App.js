import React, { useState, useEffect } from 'react';
import './App.css';
import { Start } from '../Start/Start';
import { RoundSelection } from '../RoundSelection/RoundSelection';
import { Round } from '../Round/Round';
import { Result } from '../Result/Result';
import { AccessTokenContext } from '../../hooks/TokenContext';

const apiTokenURL = process.env.REACT_APP_SPOTIFY_ACCESS_TOKEN_URL,
  client_id = process.env.REACT_APP_CLIENT_ID,
  client_secret = process.env.REACT_APP_CLIENT_SECRET;

const App = () => {
  const [route, setRoute] = useState('start');
  const [rounds, setRounds] = useState(5);
  const [accessToken, setAccessToken] = 
  useState({
    token: null,
    expires_at: null
  });
  const [albums, setAlbums] = useState({albums: []});

  useEffect(() => {
    const fetchDataAccessToken = async() => {

      // encodes client id and secret to base64
      const authParam = btoa(client_id + ':' + client_secret);
      const token = await fetch(apiTokenURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + authParam 
        },
        body: new URLSearchParams({
          grant_type: 'client_credentials'
        })
      })
      .then(response => response.json())
      .then(data => data.access_token)
      .catch(err => console.log(err));

      // calculate expiry date and time (current time + one hour)
      const expires_at = Date.now() + (60 * 60 * 1000);
      setAccessToken({ token, expires_at });
    }

    fetchDataAccessToken();
  }, []);

    return (
      <div className="App--container">
        <AccessTokenContext.Provider value={accessToken}>
          {route === 'start' && <Start setRoute={setRoute} />}
          {route === 'roundSelection' && <RoundSelection setRoute={setRoute} setRounds={setRounds} setAlbums={setAlbums} />}
          {route === 'play' && <Round setRoute={setRoute} />}
          {route === 'result' && <Result />}
        </AccessTokenContext.Provider>
      </div>
    );
  }

export { App };
