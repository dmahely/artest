import React, { useState } from 'react';
import './App.css';
import { Start } from '../Start/Start';
import { RoundSelection } from '../RoundSelection/RoundSelection';

const App = () => {
  const [route, setRoute] = useState('start');
  const [rounds, setRounds] = useState(5);

    return (
      <div className="App--container">
        {route === 'start' && <Start setRoute={setRoute} />}
        {route === 'roundSelection' && <RoundSelection setRoute={setRoute} setRounds={setRounds} />}
      </div>
    );
  }

export { App };
