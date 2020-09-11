import React from 'react';
import './FinalResult.css';
import scoreBackground from '../../assets/images/score-background.svg';
import { Button } from '../Button/Button';
import { getFinalScore } from '../getFinalScore';

const FinalResult = (props) => {
    const { setRoute, results } = props;

    const score = getFinalScore(results);
    
    return (
        <div className="FinalResult--container">
            <img src={scoreBackground} alt="background"/>
            <p>{score}</p>
            <Button text="Play again" onClick={() => setRoute('start')}/>
        </div>
    );
}

export { FinalResult };