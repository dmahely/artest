import React from 'react';
import './FinalResult.css';
import scoreBackground from '../../assets/images/score-background.svg';
import { Button } from '../Button/Button';

const FinalResult = (props) => {
    const { setRoute } = props;
    
    return (
        <div className="FinalResult--container">
            <img src={scoreBackground} alt="background"/>
            <Button text="Play again" onClick={() => setRoute('start')}/>
        </div>
    );
}

export { FinalResult };