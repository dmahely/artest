import React, { useState } from 'react';
import './App.css';
import { Start } from '../Start/Start';

const App = () => {
  const [route, setRoute] = useState('start');

    return (
      <div className="App--container">
        {route === 'start' && <Start setRoute={setRoute} />}
      </div>
    );
  }

export { App };
