import React from 'react';
import './Start.css';
import logo from '../../assets/images/logo.png';
import { Button } from '../Button/Button';

const Start = (props) => {
    const {setRoute} = props;

    return (
      <div className="Start--container">
        <img className="Start--logo" src={logo} alt="Artest logo" />
        <span className="Start--description">Guess which artist the album belongs to</span>
        <Button text="Start" onClick={() => setRoute('roundSelection')} />
      </div>
    );
  }

export { Start };
