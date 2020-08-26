import React, { useState } from 'react';
import './App.css';
import { Start } from '../Start/Start';
import { RoundSelection } from '../RoundSelection/RoundSelection';

const App = () => {
  const [route, setRoute] = useState('roundSelection');

    return (
      <div className="App--container">
        {route === 'start' && <Start setRoute={setRoute} />}
        {route === 'roundSelection' && <RoundSelection setRoute={setRoute} />}
      </div>
    );
  }

export { App };
