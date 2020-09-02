import React, { useContext } from 'react';
import './RoundSelection.css';
import { Option } from '../Option/Option';
import { AccessTokenContext } from '../../hooks/TokenContext';

const RoundSelection = (props) => {
    const {setRoute, setRounds} = props;
    const accessToken = useContext(AccessTokenContext);
    
    return (
        <div className="RoundSelection--container">
            <span className="RoundSelection--question">How many rounds do you want to play?</span>
            <div className="RoundSelection--options-container">
                <Option text="5" color="yellow" onClick={() => { setRoute('play'); setRounds(5) }} />
                <Option text="10" color="pink" onClick={() => { setRoute('play'); setRounds(10) }} />
                <Option text="15" color="green" onClick={() => { setRoute('play'); setRounds(15) }} />
                <Option text="20" color="navy" onClick={() => { setRoute('play'); setRounds(20) }} />
            </div>
        </div>
    );
}

export { RoundSelection };