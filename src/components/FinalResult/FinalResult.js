import React from 'react';
import './FinalResult.css';
import { Button } from '../Button/Button';

const FinalResult = (props) => {
    const { setRoute } = props;
    
    return (
        <div className="FinalResult--container">
            <Button text="Play again" onClick={() => setRoute('start')}/>
        </div>
    );
}

export { FinalResult };