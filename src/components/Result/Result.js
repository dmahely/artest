import React from 'react';
import './Result.css'
import { Button } from '../Button/Button';

const Result = (props) => {
    return (
        <div className="Result--container">
            <img className="Result--album-image" src="https://images-na.ssl-images-amazon.com/images/I/71uR2KhRrZL._AC_SL1066_.jpg" alt="Album name" />
            <p className="Result--result">{props.result || "Correct"}</p>
            <p className="Result--payload">{props.payload || "Beyoncé is also the artist behind Lemonade (2016) and BEYONCÉ (2013)"}</p>
            <Button text="Continue" />
        </div>
        )
    }

export { Result };