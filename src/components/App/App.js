import React from 'react';
import logo from '../../logo.svg';
import './App.css';

import { Button } from '../Button/Button';
import { Option } from '../Option/Option';
import { Result } from '../Result/Result';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button text="Start"/>
        <Option color="navy" text="1"/>
        <Option color="yellow" text="2"/>
        <Result result="Correct" payload="Beyoncé is also the artist behind Lemonade (2016) and BEYONCÉ (2013)"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
