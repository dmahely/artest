import React from 'react';
import './Result.css'
import { Button } from '../Button/Button';

const Result = (props) => {
    const {setRoute, setCurrentRound, rounds, currentRound} = props;

    // for changing the route and updating current round
    const handleClick = (e) => {
        if(currentRound < rounds) {
            setCurrentRound(currentRound => currentRound + 1);
            setRoute('play');
        } else {
            setRoute('end');
        }
    }

    return (
        <div className="Result--container">
            <img className="Result--album-image" src="https://images-na.ssl-images-amazon.com/images/I/71uR2KhRrZL._AC_SL1066_.jpg" alt="Album name" />
            <p className="Result--result">{props.result || "Correct"}</p>
            <p className="Result--payload">{props.payload || "Beyoncé is also the artist behind Lemonade (2016) and BEYONCÉ (2013)"}</p>
            <Button text="Continue" onClick={() => handleClick()}/>
        </div>
        )
    }

export { Result };