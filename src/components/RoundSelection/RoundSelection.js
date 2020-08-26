import React from 'react';
import './RoundSelection.css';
import { Option } from '../Option/Option';

const RoundSelection = (props) => {
    const {setRoute} = props;
    
    return (
        <div className="RoundSelection--container">
            <span className="RoundSelection--question">How many rounds do you want to play?</span>
            <div className="RoundSelection--options-container">
                <Option text="5" color="yellow" onClick={() => setRoute('play')} />
                <Option text="10" color="pink" onClick={() => setRoute('play')} />
                <Option text="15" color="green" onClick={() => setRoute('play')} />
                <Option text="20" color="navy" onClick={() => setRoute('play')} />
            </div>
        </div>
    );
}

export { RoundSelection };